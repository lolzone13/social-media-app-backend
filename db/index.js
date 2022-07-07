const { Pool } = require('pg')
const dotenv = require('dotenv').config();

const prodConfig = process.env.DATABASE_URI; 

let pool;

if (process.env.ENVIRONMENT === 'dev') {
  pool = new Pool();
}
else {
  pool = new Pool({
    connectionString: prodConfig
  })
}





module.exports = {
  query: (text, params) => pool.query(text, params),
}