const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/login');


router.route('/')
    .get(LoginController.login);



module.exports = router;