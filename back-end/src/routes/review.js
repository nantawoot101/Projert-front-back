const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review-controller');

router.post('/', review-controller.createReview);


// หน้าแสดงรายละเอียดหนังสือเฉพาะเล่ม
router.get('/:bookId', review-controller.getReviewsByBookId);



module.exports = router;