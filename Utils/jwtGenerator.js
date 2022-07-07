const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });


const jwtGenerator = (user_id) => {
    const payload = {
        user: user_id
    }
    return jwt.sign(payload, process.env.JWTSECRET, {expiresIn: "24hr"});
    
}

module.exports = jwtGenerator;