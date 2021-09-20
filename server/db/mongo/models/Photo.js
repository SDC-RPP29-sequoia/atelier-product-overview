/* eslint-disable camelcase */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  thumbnail_url: {
    type: String,
    required: true
  }
});

module.exports.photoSchema = photoSchema;
const Photo = mongoose.model('Photo', photoSchema);

module.exports.Photo = Photo;