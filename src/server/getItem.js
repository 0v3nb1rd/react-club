const express = require('express');
const app = express();
const Product = require('./models/product.model');

const getItem = app.get('/product/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params['id']);
    res.send(product);
  } catch (e) {
    res.status(500);
    res.end();
  }
});

module.exports = getItem;
