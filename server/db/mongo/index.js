/* eslint-disable func-style */
/* eslint-disable camelcase */
require('dotenv').config();
const mongoose = require('mongoose');
const { Product } = require('./models/Product.js');
const { Feature } = require('./models/Feature.js');
const { Style } = require('./models/Style.js');
const { Sku } = require('./models/Sku.js');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('connected', () => console.log('Mongoose Connected'));


// let database = 'sdc_product_overview';
// let collection = 'styles';

// for (let i = 8; i < 40; i++) {


//   let exec = require('child_process').exec
//   let command = `mongoimport -db ${database} -collection ${collection} --type json --jsonArray --file docs/data/json/styleObject/${i}.json`
//   child_process.execSync(command)
// }

// Product.find({name: 'Camo Onesie'}).exec().then(function (doc) {
//   console.log('Doc', doc[0])
// })

// mongoimport --db sdc_product_overview --collection styles --drop --type json --file docs/data/json/styleObject/0.json --jsonArray
// mongoimport --db sdc_product_overview --collection products --drop --type json --file docs/data/json/0.json --jsonArray

// Drop database
// db.dropDatabase();
// Add 2 collections
// Add docs to each collection

// Get style data with photos and skus

// Product.find({name: 'Camo Onesie'})
//   .populate('Feature')
//   .exec(function (err, result) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//     }
//   });
