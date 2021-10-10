/* eslint-disable camelcase */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  id: {type: String, required: true, index: true},
  name: {type: String, required: true},
  slogan: {type: String},
  description: {type: String},
  category: {type: String},
  default_price: {type: String, required: true},
  features: {type: Array}
});

const Product = mongoose.model('Product', productSchema);
module.exports.productSchema = productSchema;
module.exports.Product = Product;