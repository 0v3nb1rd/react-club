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

app.get('/', (req, res) => {
  Product.find({})
    .where('category')
    .equals(req.query.cat)
    .where('brend')
    .equals(req.query.brend)
    .exec((err, result) => {
      res.send(result);
    });
  // res.send(`Hello ${req.query.cat} ${req.query.brend} ${req.query.sortBy}`);
  // Product.find({
  //   category: req.query.cat,
  //   // brend: req.query.brend !== 'allbrends' ? req.query.brend : String,
  //   // brend: req.query.brend,
  // }).exec(function (err, orders) {
  //   // populated and filtered twice
  //   // console.log(orders);
  //   res.send(orders);
  // });
  // .then((result) => res.send(result));
});

app.get('/products', (req, res) => {
  Product.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// app.get('/product:id', (req, res) => {
//   Product.find({ id: 2 })
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

app.get('/add', (req, res) => {
  const product = new Product({
    id: 8,
    cardName: 'Item 8',
    title: 'Asus ZenBook',
    shortText:
      "Assus laptop is awesome book electronics are the bane of the modern life. Perfectly functional gadgets sit quietly in a corner of the store room, doing nothing. If you're wondering what to do with old computer monitors, here are a few easy ideas to repurpose unused screens.",
    img: 'https://i.ibb.co/HpMJJjV/asuszen.png',
    price: 1089,
    route: 'asuszenbook',
    category: 'computers',
    brend: 'assus',
  });
  product
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
