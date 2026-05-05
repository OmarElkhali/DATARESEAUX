const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { promisify } = require('util');
const { randomBytes, scrypt, timingSafeEqual } = require('crypto');
const { corsOrigin, dbConfig, isProduction, sessionSecret } = require('./config');

const app = express();
const authPort = Number.parseInt(process.env.AUTH_PORT, 10) || 3001;
const scryptAsync = promisify(scrypt);
const HASH_KEY_LENGTH = 64;
const SALT_BYTES = 16;
const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const LOGIN_MAX_ATTEMPTS = 10;
const loginAttempts = new Map();

app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(cors({
  origin: corsOrigin,
  credentials: true
}));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    secure: isProduction,
    maxAge: 1000 * 60 * 60
  }
}));

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
  console.log('Connected to database');
});

const hashPassword = async (password) => {
  const salt = randomBytes(SALT_BYTES).toString('hex');
  const derivedKey = await scryptAsync(password, salt, HASH_KEY_LENGTH);
  return `${salt}:${derivedKey.toString('hex')}`;
};

const constantTimeEqual = (value, expected) => {
  const valueBuffer = Buffer.from(value);
  const expectedBuffer = Buffer.from(expected);
  const maxLength = Math.max(valueBuffer.length, expectedBuffer.length);
  const paddedValue = Buffer.concat([valueBuffer, Buffer.alloc(maxLength - valueBuffer.length)]);
  const paddedExpected = Buffer.concat([expectedBuffer, Buffer.alloc(maxLength - expectedBuffer.length)]);
  const match = timingSafeEqual(paddedValue, paddedExpected);
  return match && valueBuffer.length === expectedBuffer.length;
};

const verifyPassword = async (password, storedPassword) => {
  if (!storedPassword) {
    return { verified: false, needsUpgrade: false };
  }

  if (!storedPassword.includes(':')) {
    const match = constantTimeEqual(storedPassword, password);
    return { verified: match, needsUpgrade: match };
  }

  const [salt, key] = storedPassword.split(':');
  if (!salt || !key) {
    return { verified: false, needsUpgrade: false };
  }

  const derivedKey = await scryptAsync(password, salt, HASH_KEY_LENGTH);
  const keyBuffer = Buffer.from(key, 'hex');
  if (keyBuffer.length !== derivedKey.length) {
    return { verified: false, needsUpgrade: false };
  }
  return { verified: timingSafeEqual(keyBuffer, derivedKey), needsUpgrade: false };
};

const updatePasswordHash = (userId, passwordHash) => new Promise((resolve, reject) => {
  db.query('UPDATE users SET password = ? WHERE id = ?', [passwordHash, userId], (err) => {
    if (err) {
      reject(err);
      return;
    }
    resolve();
  });
});

const regenerateSession = (request) => new Promise((resolve, reject) => {
  request.session.regenerate((err) => {
    if (err) {
      reject(err);
      return;
    }
    resolve();
  });
});

const loginRateLimiter = (req, res, next) => {
  const now = Date.now();
  const key = req.ip;
  const entry = loginAttempts.get(key);

  if (!entry || now - entry.startTime > LOGIN_WINDOW_MS) {
    loginAttempts.set(key, { count: 1, startTime: now });
    return next();
  }

  if (entry.count >= LOGIN_MAX_ATTEMPTS) {
    return res.status(429).json({ message: 'Too many login attempts. Please try again later.' });
  }

  entry.count += 1;
  return next();
};

app.post('/login', loginRateLimiter, (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const query = 'SELECT id, username, password FROM users WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err) {
      console.error('Login query failed:', err.message);
      return res.status(500).json({ message: 'Login failed' });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const user = results[0];
    try {
      const { verified, needsUpgrade } = await verifyPassword(password, user.password);
      if (!verified) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      if (needsUpgrade) {
        try {
          const upgradedHash = await hashPassword(password);
          await updatePasswordHash(user.id, upgradedHash);
        } catch (upgradeErr) {
          console.warn('Failed to upgrade password hash:', upgradeErr.message);
        }
      }

      await regenerateSession(req);
      req.session.user = { id: user.id, username: user.username };
      return res.json({ message: 'Login successful' });
    } catch (verifyErr) {
      console.error('Password verification failed:', verifyErr.message);
      return res.status(500).json({ message: 'Login failed' });
    }
  });
});

app.get('/checkAuth', (req, res) => {
  if (req.session.user) {
    res.json({ isAuthenticated: true });
  } else {
    res.json({ isAuthenticated: false });
  }
});

app.listen(authPort, () => {
  console.log(`Server running on port ${authPort}`);
});
