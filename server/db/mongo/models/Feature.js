const mongoose = require('mongoose');
const { Schema } = mongoose;

const featureSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  feature: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
});
module.exports.featureSchema = featureSchema;

const Feature = mongoose.model('Feature', featureSchema);
module.exports.Feature = Feature;