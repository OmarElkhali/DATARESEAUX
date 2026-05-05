const crypto = require('crypto');

const isProduction = process.env.NODE_ENV === 'production';

if (isProduction && !process.env.SESSION_SECRET) {
  throw new Error('SESSION_SECRET must be set in production.');
}

if (isProduction && !process.env.DB_PASSWORD) {
  throw new Error('DB_PASSWORD must be set in production.');
}

const sessionSecret = process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex');
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';

const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'datareseauxdb'
};

module.exports = {
  corsOrigin,
  dbConfig,
  isProduction,
  sessionSecret
};
