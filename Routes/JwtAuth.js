const express = require('express');
const { registerUsers, loginUsers, verifyAuth } = require('../Controllers/AuthController');
const validateEmail = require('../Middleware/ValidateEmail');
const authorization = require('../Middleware/Authorization');


const router = express.Router();


router
    .route('/register')
    .post(validateEmail, registerUsers);

router
    .route('/login')
    .post(validateEmail, loginUsers);
    
router
    .route('/verify')
    .get(authorization, verifyAuth);


module.exports = router;