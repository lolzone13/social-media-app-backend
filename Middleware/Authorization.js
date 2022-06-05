const jwt = require('jsonwebtoken');
const dotenv= require('dotenv');

dotenv.config({path: '../Config/config.env'});

module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header('token');

        if (!jwtToken) {
            return res.status(403).json({
                success: false,
                error: "Unauthorized"
            });
        }

        const payload = jwt.verify(jwtToken, process.env.JWTSECRET);
        req.user = payload.user;
        next();
    } catch (error) {
        res.status(403).json({
            success: false,
            error: "Unauthorized"
        });
    }
}