const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const { notFound, errorHandler } = require('./middlewares');
const api = require('./api');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: '🌎 Hello Express 🌎',
  });
});

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
