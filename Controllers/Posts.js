const db = require('../db');



exports.getAllPosts = async (req, res, next) => {

    const posts = await db.query('SELECT * FROM posts');
    
    try {
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


exports.getPost = (req, res, next) => {

    try {
        res.status(200).json({
            success: true,
            data: { content: "One Post" }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server Error"
        })     
    }
}

exports.postPost = (req, res, next) => {
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