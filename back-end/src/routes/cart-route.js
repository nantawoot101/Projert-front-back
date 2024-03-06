const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart-controller');

router.get('/', cartController.listCart);   
router.get('/:id', cartController.getCartItems);
router.post('/add', cartController.addToCart);
router.put('/:id', cartController.updateCartItems);
router.delete('/:id', cartController.deleteCartItem);

module.exports = router;