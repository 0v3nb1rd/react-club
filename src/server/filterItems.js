const express = require('express');
const app = express();
const Product = require('./models/product.model');

const filterItems = app.get('/filter', (req, res) => {
  const filterQuerys = {};
  const sortQuery = {};

  req.query.cat !== 'allcategory'
    ? (filterQuerys.category = req.query.cat)
    : null;
  req.query.brend !== 'allbrends'
    ? (filterQuerys.brend = req.query.brend)
    : null;

  req.query.sortBy === 'lowerprice' ? (sortQuery.price = 1) : null;
  req.query.sortBy === 'upperprice' ? (sortQuery.price = -1) : null;

  Product.find(filterQuerys)
    .sort(sortQuery)
    .exec((err, orders) => {
      res.send(orders);
    });
});

module.exports = filterItems;
