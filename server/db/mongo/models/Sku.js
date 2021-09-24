const mongoose = require('mongoose');
const { Schema } = mongoose;

const skuSchema = new Schema({
  id: { type: Number, required: true },
  styleId: { type: Number, required: true },
  size: { type: String, required: true },
  quantity: { type: Number, default: 0 }
});

const Sku = mongoose.model('Sku', skuSchema);
module.exports.skuSchema = skuSchema;
module.exports.Sku = Sku;