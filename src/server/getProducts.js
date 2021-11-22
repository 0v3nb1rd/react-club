const express = require('express');
const app = express();
const Product = require('./models/product.model');

const getProducts = app.get('/products', (req, res) => {
  Product.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

module.exports = getProducts;
