const express = require('express');
const app = express();
const morgan = require('morgan');

const db = require('./db');

const getProducts = require('./getProducts');
const getItem = require('./getItem');
const filterItems = require('./filterItems');

const PORT = 3110;

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // allow CORS
  next();
});

db.then((res) => app.listen(PORT)).catch((err) => console.log(err.message));

// ! getProducts
app.use(getProducts);

// ! getItem
app.use(getItem);

// ! filterItems;
app.use(filterItems);
