const express = require('express');
const router = express.Router();
const referenceRoutes = require('./referenceRoutes');

// API Routes
router.use('/references', referenceRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

module.exports = router;
