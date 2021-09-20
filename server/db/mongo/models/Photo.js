/* eslint-disable camelcase */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema({
  id: {type: Number, required: true},
  styleId: {type: Number, required: true},
  url: {type: String, default: null},
  thumbnail_url: {type: String, default: null}
});

const Photo = mongoose.model('Photo', photoSchema);
module.exports.photoSchema = photoSchema;
module.exports.Photo = Photo;