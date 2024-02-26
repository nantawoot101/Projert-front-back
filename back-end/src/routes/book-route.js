const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');



router.post('/add', bookController.createBook);

// หน้าแสดงรายการหนังสือทั้งหมด
router.get('/', bookController.getAllBooks);

// หน้าแสดงรายละเอียดหนังสือเฉพาะเล่ม
router.get('/books/:id', bookController.getBookById);


// หน้าอัปเดตข้อมูลหนังสือ
router.put('/books/:id', bookController.updateBook);

// หน้าลบหนังสือ
router.delete('/books/:id', bookController.deleteBook);

// หน้าแสดงรายการหมวดหมู่หนังสือทั้งหมด
router.get('/genres', bookController.getAllGenres);

// หน้าแสดงรายละเอียดหมวดหมู่หนังสือเฉพาะเล่ม
router.get('/genres/:id', bookController.getGenreById);

// หน้าเพิ่มหมวดหมู่หนังสือใหม่
router.post('/genres', bookController.genresBook);

// หน้าอัปเดตข้อมูลหมวดหมู่หนังสือ
router.put('/genres/:id', bookController.updateGenre);

module.exports = router;

