const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: '../Config/config.env' });


const jwtGenerator = (user_id) => {
    const payload = {
        user: user_id
    }
    return jwt.sign(payload, process.env.JWTSECRET, {expiresIn: "1hr"});
    
}

module.exports = jwtGenerator;