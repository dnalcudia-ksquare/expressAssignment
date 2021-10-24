// Modules
const express = require('express');
const { validateBook } = require('../validators/book');
const BookResources = express.Router();

// Controllers
const { BookControllers } = require('../controllers');

// All book resources
BookResources.get('/', BookControllers.getAll);
BookResources.post('/', validateBook, BookControllers.createBook);
BookResources.get('/:guid', BookControllers.getByGuid);
BookResources.put('/:guid', validateBook, BookControllers.updateBook);
BookResources.delete('/:guid', BookControllers.deleteBook);

module.exports = BookResources;
