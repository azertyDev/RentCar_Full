const express = require('express');
const router = express.Router();
const RegController = require('../controllers/reg');

router.route('/')
    .post(RegController.regUser);


module.exports = router;