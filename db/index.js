const { Pool } = require('pg')
const dotenv = require('dotenv').config();

const prodConfig = process.env.DATABASE_URL; 

let pool;

if (process.env.ENVIRONMENT === 'dev') {
  pool = new Pool();
}
else {
  pool = new Pool({
    connectionString: prodConfig,
    ssl: {
      rejectUnauthorized: false,
    }
  })
}





module.exports = {
  query: (text, params) => pool.query(text, params),
}