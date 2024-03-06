const express = require('express');
const router = express.Router();
const promoteController = require('../controllers/promote-controller');




// หน้าแสดงรายการโปรโมท
router.get('/', promoteController.getAllpromote);

//หน้าเพิ่มการโปรโมท
router.post('/add', promoteController.addpromote);

module.exports = router;

