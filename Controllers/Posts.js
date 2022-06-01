const db = require('../db');



exports.getAllPosts = async (req, res, next) => {    
    try {
        const posts = await db.query('SELECT * FROM posts');
        res.status(200).json({
            success: true,
            data: posts.rows,

            
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
}


exports.getPost = async (req, res, next) => {
    
    try {
        const post = await db.query(`SELECT * FROM posts where id::text=\'${req.params.id}\'`);
        console.log(post);
        res.status(200).json({
            success: true,
            data: post.rows
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server Error"
        })     
    }
}

exports.postPost = async (req, res, next) => {
    try {

        const del = db.query(`INSERT INTO POSTS`)
        res.status(200).json({
            success: true,
            data: req.body
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

exports.deletePosts = async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: req.body
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}