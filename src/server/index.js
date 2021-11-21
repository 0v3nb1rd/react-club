const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
// const connectDB = require('./db');

const Product = require('./models/product.model');

const PORT = 3110;
const DB_URI =
  'mongodb+srv://nazar:12345@react.avpd4.mongodb.net/store?retryWrites=true&w=majority';

app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // allow CORS
  next();
});

mongoose
  .connect(DB_URI)
  .then((res) => app.listen(PORT))
  .catch((err) => console.log(err.message));

app.get('/products', (req, res) => {
  Product.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get('/filter', (req, res) => {
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

// app.get('/product:id', (req, res) => {
//   Product.find({ id: 2 })
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// app.get('/add', (req, res) => {
//   const product = new Product({
//     id: 8,
//     cardName: 'Item 8',
//     title: 'Asus ZenBook',
//     shortText:
//       "Assus laptop is awesome book electronics are the bane of the modern life. Perfectly functional gadgets sit quietly in a corner of the store room, doing nothing. If you're wondering what to do with old computer monitors, here are a few easy ideas to repurpose unused screens.",
//     img: 'https://i.ibb.co/HpMJJjV/asuszen.png',
//     price: 1089,
//     route: 'asuszenbook',
//     category: 'computers',
//     brend: 'assus',
//   });
//   product
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });
