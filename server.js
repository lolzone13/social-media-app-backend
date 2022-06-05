const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const helmet = require('helmet');
const cors = require('cors');
const status = require('http-status');
const xss = require('xss-clean');

dotenv.config({ path: './Config/config.env' });


const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.ENVIRONMENT === "dev") {
  app.use(morgan('dev'));
}

app.use(helmet());
app.use(xss());


// cors
const corsOptions = {
  origin: (origin, callback) => {
    callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Access-Control-Allow-Origin", "Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
  credentials: true
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

const auth = require('./Routes/JwtAuth');
app.use('/api/v1/auth', auth);

const posts = require('./Routes/Posts');
app.use('/api/v1/', posts);



// 404 route
app.all('*', (req, res, next) => {
  res.status(404).send('Page Not Found!');
});

app.listen(process.env.PORT, () => {
  console.log('Listening on PORT 5000!'.rainbow)
});