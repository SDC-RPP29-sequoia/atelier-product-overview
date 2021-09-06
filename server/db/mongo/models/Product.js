/* eslint-disable camelcase */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  slogan: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  default_price: {
    type: Number
  },
});

module.exports.productSchema = productSchema;
const Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;