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
        const dbQuery = `INSERT INTO posts(email, title, body, upvotes, downvotes, tag) VALUES ($1, $2, $3, $4, $5, $6) returning *`;
        const entry = [ req.body.email, req.body.title, req.body.body, req.body.upvotes, req.body.downvotes, req.body.tag]
        const post = await db.query(dbQuery, entry);

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


exports.updatePosts = async (req, res, next) => {
    try {
        const selectQuery = `SELECT * FROM posts where id::text=$1`;
        const post = await db.query(selectQuery, [req.params.id]);


        if (post.rows.length > 0) {
            const dbQuery = `UPDATE posts SET email=$1, title=$2, body=$3 upvotes=$4 downvotes=$5 tag=$6,  WHERE id::text=$7 RETURNING *`;
            const data = [ req.body.email, req.body.title, req.body.body, req.body.upvotes, req.body.downvotes, req.body.tag, req.params.id];
            const upd = await db.query(dbQuery, data);
            res.status(200).json({
                success: true,
                data: upd.rows
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