const db = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../Utils/jwtGenerator');


exports.registerUsers = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
        if (user.rows.length > 0) {
            res.status(401).json({
                success: false,
                error: "User already exists!"
            });
        }
        else {
            const bcrypt = require('bcrypt');
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const bcryptPassword = await bcrypt.hash(password, salt);


            const newUser = await db.query(`INSERT INTO users(username, email, password) VALUES ($1, $2, $3) returning *`, [username, email, bcryptPassword]);

            const token = jwtGenerator(newUser.rows[0].id);
            
            res.json({ token });
        }
    } catch (error) {
        
        res.status(500).json({
            success: false,
            error: "Server error"
        });
    }
}


exports.loginUsers = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
        if (user.rows.length === 0) {
            res.status(401).json({
                success: false,
                error: "Incorrect email/password"
            });
        }
        else {
            const validPassword = await bcrypt.compare(password, user.rows[0].password);


            if (!validPassword) {
                res.status(401).json({
                    success: false,
                    error: "Incorrect email/password"
                });
            }
            else {
                const token = jwtGenerator(user.rows[0].id);
                res.json({ token });
            }
        }

    } catch (error) {
        
        res.status(500).json({
            success: false,
            error: "Server error"
        });
    }
}

exports.verifyAuth = async (req, res, next) => {
    try {
        res.json(true);
    } catch (error) {
        
        res.status(500).json({
            success: false,
            error: "Server error"
        });
    }
}