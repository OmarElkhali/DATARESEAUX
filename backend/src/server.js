const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { promisify } = require('util');
const { randomBytes, scrypt, timingSafeEqual } = require('crypto');
const { corsOrigin, dbConfig, isProduction, sessionSecret } = require('./config');

const app = express();
const port = Number.parseInt(process.env.AUTH_PORT, 10) || 3001;
const scryptAsync = promisify(scrypt);
const HASH_KEY_LENGTH = 64;
const SALT_BYTES = 16;

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

const verifyPassword = async (password, storedPassword) => {
  if (!storedPassword) {
    return { verified: false, needsUpgrade: false };
  }

  if (!storedPassword.includes(':')) {
    return { verified: storedPassword === password, needsUpgrade: storedPassword === password };
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

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const query = 'SELECT id, username, password FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Login query failed:', err.message);
      return res.status(500).json({ message: 'Login failed' });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const user = results[0];
    verifyPassword(password, user.password)
      .then(async ({ verified, needsUpgrade }) => {
        if (!verified) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }

        if (needsUpgrade) {
          try {
            const upgradedHash = await hashPassword(password);
            db.query('UPDATE users SET password = ? WHERE id = ?', [upgradedHash, user.id], (updateErr) => {
              if (updateErr) {
                console.warn('Failed to upgrade password hash:', updateErr.message);
              }
            });
          } catch (hashErr) {
            console.warn('Failed to upgrade password hash:', hashErr.message);
          }
        }

        return req.session.regenerate((sessionErr) => {
          if (sessionErr) {
            console.error('Session regeneration failed:', sessionErr.message);
            return res.status(500).json({ message: 'Login failed' });
          }
          req.session.user = { id: user.id, username: user.username };
          return res.json({ message: 'Login successful' });
        });
      })
      .catch((verifyErr) => {
        console.error('Password verification failed:', verifyErr.message);
        res.status(500).json({ message: 'Login failed' });
      });
  });
});

app.get('/checkAuth', (req, res) => {
  if (req.session.user) {
    res.json({ isAuthenticated: true });
  } else {
    res.json({ isAuthenticated: false });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
