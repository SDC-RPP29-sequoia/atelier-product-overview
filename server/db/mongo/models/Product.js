/* eslint-disable camelcase */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  id: {type: Number, required: true, index: true},
  name: {type: String, required: true},
  slogan: {type: String},
  description: {type: String},
  category: {type: String},
  default_price: {type: String, required: true},
  styles: {type: Schema.Types.ObjectId, ref: 'Style'},
  features: {type: Schema.Types.ObjectId, ref: 'Feature'}
});

const Product = mongoose.model('Product', productSchema);
module.exports.productSchema = productSchema;
module.exports.Product = Product;