const mongoose = require('mongoose');
const { Schema } = mongoose;

const skuSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

module.exports.skuSchema = skuSchema;
const Sku = mongoose.model('Sku', skuSchema);

module.exports.Sku = Sku;