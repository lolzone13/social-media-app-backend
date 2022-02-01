const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });


const PORT = 5000;

const app = express();



app.listen(PORT, () => {
    console.log('Listening on PORT 5000!')
})