/* eslint-disable camelcase */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const featureSchema = new Schema({
  _id: Schema.Types.ObjectId,
  id: {type: Number, required: true},
  product_id: {type: String, required: true, index: true},
  feature: {type: String, required: true},
  value: {type: String, default: null}
});

const Feature = mongoose.model('Feature', featureSchema);
module.exports.featureSchema = featureSchema;
module.exports.Feature = Feature;