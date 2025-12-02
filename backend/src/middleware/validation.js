const { body, validationResult } = require('express-validator');
const { AppError } = require('./errorHandler');

const validateReference = [
  body('category')
    .notEmpty()
    .withMessage('Category is required')
    .isString()
    .withMessage('Category must be a string')
    .isIn(['infrastructure', 'industrie'])
    .withMessage('Category must be either infrastructure or industrie')
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(err => err.msg).join(', ');
    return next(new AppError(errorMessages, 400));
  }
  next();
};

module.exports = { validateReference, handleValidationErrors };
