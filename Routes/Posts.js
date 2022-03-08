const express = require('express');
const router = express.Router();

const { getPosts } = require('../Controllers/posts');


router
    .route('/posts')
    .get(getPosts);


module.exports = router;