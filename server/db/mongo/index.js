/* eslint-disable func-style */
/* eslint-disable camelcase */
require('dotenv').config();
const mongoose = require('mongoose');
const { Product } = require('./models/Product.js');
const Style = require('./models/Style.js');


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('connected', () => console.log('Mongoose Connected'));


