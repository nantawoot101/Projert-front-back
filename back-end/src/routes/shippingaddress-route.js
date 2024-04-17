const express = require('express');
const router = express.Router();
const ShippingAddressController = require('../controllers/shippingaddress-controller');
const authenticate = require('../middlewares/authenticate');


router.get('/', ShippingAddressController.getAllShippingAddress);
router.get('/:id',ShippingAddressController.getShippingById);
router.post('/new',authenticate,ShippingAddressController.createShippingAddress );
router.delete('/:id',ShippingAddressController.deleteShipping);



module.exports = router;