const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
const authenticate = require('../middlewares/authenticate')

router.get('/', userController.getUsers);
router.put('/edituser/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;