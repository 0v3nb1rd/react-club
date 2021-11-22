const mongoose = require('mongoose');

const DB_URI =
  'mongodb+srv://nazar:12345@react.avpd4.mongodb.net/store?retryWrites=true&w=majority';

const db = mongoose
  .connect(DB_URI)
  .then((res) => console.log('connected...'))
  .catch((err) => console.log(err.message));

module.exports = db;
