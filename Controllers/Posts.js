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
        const dbQuery = `SELECT * FROM posts where id::text=$1`;
        const post = await db.query(dbQuery, [req.params.id]);
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
        // validation
        const dbQuery = `INSERT INTO posts(email, title, body, upvotes, downvotes) VALUES ($1, $2, $3, $4, $5) returning *`;
        const entry = [ req.body.email, req.body.title, req.body.body, req.body.upvotes, req.body.downvotes]
        const post = await db.query(dbQuery, entry);
        //console.log(post);
        res.status(200).json({
            success: true,
            data: post.rows
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
        const selectQuery = `SELECT * FROM posts where id::text=$1`;
        const post = await db.query(selectQuery, [req.params.id]);


        if (post.rows.length > 0) {
            const dbQuery = `DELETE FROM posts WHERE id::text=$1`;
            const del = await db.query(dbQuery, [req.params.id]);
            res.status(200).json({
                success: true,
                data: post.rows
            });
        }
        else {
            res.status(404).json({
                success: false,
                error: "No such row"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}