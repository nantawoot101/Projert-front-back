const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart-controller');
const authenticate = require('../middlewares/authenticate');

router.get('/getCart', authenticate,cartController.getCart);
router.post('/add/:id',authenticate, cartController.addToCart);
router.delete('/deleteCart/:id',authenticate, cartController.deleteCart);


module.exports = router;