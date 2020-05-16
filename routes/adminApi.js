var express = require('express');
var router = express.Router();
const userController = require('../controllers/admin/User.js')

router.get('/login',userController.login);
router.post('/signin',userController.signin);

module.exports = router