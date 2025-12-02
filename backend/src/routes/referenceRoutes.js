const express = require('express');
const router = express.Router();
const referenceController = require('../controllers/referenceController');
const upload = require('../middleware/upload');
const { validateReference, handleValidationErrors } = require('../middleware/validation');

// Add new reference
router.post(
  '/add',
  upload.single('logo'),
  validateReference,
  handleValidationErrors,
  referenceController.addReference
);

// Get all references (optionally filtered by category)
router.get('/all', referenceController.getAllReferences);

// Delete a reference
router.delete('/delete/:id', referenceController.deleteReference);

module.exports = router;
