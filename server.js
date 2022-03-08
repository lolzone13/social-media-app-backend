const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });


const PORT = 5000;

const app = express();
app.use(express.json());

app.get('/Home', (req, res) => {
    res.send("Welcome Home");
})

const posts = require('./Routes/Posts');

app.use('/api/v1/', posts);

app.listen(PORT, () => {
    console.log('Listening on PORT 5000!')
})