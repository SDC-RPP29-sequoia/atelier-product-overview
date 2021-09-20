/* eslint-disable camelcase */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const featureSchema = new Schema({
  id: {type: Number, required: true},
  product_id: {type: Schema.Types.ObjectId, ref: 'product'},
  feature: {type: String, required: true},
  value: {type: String, default: null}
});

const Feature = mongoose.model('Feature', featureSchema);
module.exports.featureSchema = featureSchema;
module.exports.Feature = Feature;