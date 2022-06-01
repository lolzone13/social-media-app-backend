const express = require("express");
const router = express.Router();

const { getAllPosts, getPost, postPost } = require("../Controllers/posts");
const { getUsers } = require("../Controllers/Users");

router
    .route("/posts")
    .get(getAllPosts)
    .post(postPost);
router
    .route("/posts/:id")
    .get(getPost);


router
    .route("/users")
    .get(getUsers);

module.exports = router;
