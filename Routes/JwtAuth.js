const express = require('express');
const { registerUsers } = require('../Controllers/AuthController');

const router = express.Router();


router
    .route('/register')
    .post(registerUsers);




module.exports = router;