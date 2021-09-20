/* eslint-disable camelcase */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const styleSchema = new Schema({
  id: {type: Number, required: true},
  product_id: {type: Number, required: true, index: true
  },
  name: {type: String, required: true},
  sale_price: {type: Number, default: null},
  original_price: {type: Number, required: true},
  default_style: {type: String, required: true}
});

const Style = mongoose.model('Style', styleSchema);
module.exports.styleSchema = styleSchema;
module.exports.Style = Style;