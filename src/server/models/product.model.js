const { model, Schema } = require('mongoose');

const productSchema = new Schema({
  id: {
    type: Number,
    require: true,
  },
  cardName: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  shortText: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  route: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  brend: {
    type: String,
    require: true,
  },
});

module.exports = model('Product', productSchema);
