const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateBook = [
  check('title').exists().not().isEmpty(),
  check('author').exists().not().isEmpty(),
  check('publicationYear')
    .exists()
    .isNumeric()
    .custom((value, { req }) => {
      const currentYear = new Date().getFullYear();
      if (value < 1454 || value > currentYear) {
        throw new Error(
          `The year of publication must be between 1454 and ${currentYear}.`
        );
      }
      return true;
    }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateBook };
