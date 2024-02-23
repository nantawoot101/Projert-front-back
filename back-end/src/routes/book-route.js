const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');



router.post('/add', bookController.createBook);
router.post('/genres', bookController.genresBook);

module.exports = router;