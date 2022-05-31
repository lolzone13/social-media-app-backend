const express = require('express');
const router = express.Router();

const { getPosts } = require('../Controllers/posts');
const { getUsers } = require('../Controllers/Users');


router
    .route('/posts')
    .get(getPosts);


router
    .route('/users')
    .get(getUsers);


module.exports = router;