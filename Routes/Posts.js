const express = require("express");
const router = express.Router();

const { getAllPosts, getPost, postPost, deletePosts } = require("../Controllers/posts");
const { getUsers } = require("../Controllers/Users");

router
    .route("/posts")
    .get(getAllPosts)
    .post(postPost);
router
    .route("/posts/:id")
    .get(getPost)
    .delete(deletePosts);


router
    .route("/users")
    .get(getUsers);

module.exports = router;
