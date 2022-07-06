const express = require("express");
const router = express.Router();

const { getAllPosts, getPost, postPost, deletePosts, updatePosts } = require("../Controllers/posts");
const { getUsers } = require("../Controllers/Users");
const authorization = require('../Middleware/Authorization');

router
    .route("/posts")
    //.all(authorization)
    .get(getAllPosts)
    .post(postPost);


router
    .route("/posts/:id")
    .all(authorization)
    .get(getPost)
    .delete(deletePosts)
    .put(updatePosts);


module.exports = router;
