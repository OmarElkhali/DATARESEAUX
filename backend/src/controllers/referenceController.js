const Reference = require('../models/Reference');
const { AppError } = require('../middleware/errorHandler');
const fs = require('fs').promises;
const path = require('path');

const referenceController = {
  addReference: async (req, res, next) => {
    try {
      if (!req.file) {
        return next(new AppError('Logo file is required', 400));
      }

      const logoPath = req.file.path;
      const category = req.body.category;

      const newReference = await Reference.create({
        logo_path: logoPath,
        category: category
      });

      res.status(201).json({
        success: true,
        data: newReference
      });
    } catch (err) {
      next(err);
    }
  },

  getAllReferences: async (req, res, next) => {
    try {
      const { category } = req.query;
      let references;

      if (category) {
        references = await Reference.getByCategory(category);
      } else {
        references = await Reference.getAll();
      }

      res.json({
        success: true,
        count: references.length,
        data: references
      });
    } catch (err) {
      next(err);
    }
  },

  deleteReference: async (req, res, next) => {
    try {
      const { id } = req.params;

      // Find reference first to get file path
      const reference = await Reference.findById(id);
      
      if (!reference) {
        return next(new AppError('Reference not found', 404));
      }

      // Delete the file from filesystem
      if (reference.logo_path) {
        const filePath = path.resolve(reference.logo_path);
        try {
          await fs.unlink(filePath);
        } catch (fileErr) {
          // Log but don't fail if file doesn't exist
          console.warn('Could not delete file:', fileErr.message);
        }
      }

      // Delete from database
      await Reference.remove(id);

      res.json({
        success: true,
        message: 'Reference deleted successfully'
      });
    } catch (err) {
      next(err);
    }
  }
};

module.exports = referenceController;
