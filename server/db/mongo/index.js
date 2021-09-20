/* eslint-disable camelcase */
require('dotenv').config();
const mongoose = require('mongoose');
const csvtojson = require('csvtojson');
const csvParser = require('csv-parser');
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');


// const destination = fs.createWriteStream('docs/data/json/1.json');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('connected', () => console.log('Mongoose Connected'));

const products = 'docs/data/csv/product.csv';
const features = 'docs/data/csv/features.csv';
const skus = 'docs/data/csv/skus.csv';
const styles = 'docs/data/csv/styles.csv';

var collectionName = 'products';
var collection = db.collection(collectionName);
// collection.drop();




// collection.insertMany(csvData, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   if (result) {
//     console.log('Import CSV successful');
//     collection.find().toArray(function (err, items) {
//       console.log(items[0])
//     });
//   }
// });




// // })//
//   collection.find({name: 'Camo Onesie'}).toArray(function(err, result) {
//     console.log(result)
//   })




// async function download(target) {
//   return new Promise(async (resolve, reject) => {
//     const { url, out, name } = target;

//     const request = {
//       url,
//       responseType: 'stream',
//     }

//     try {
//       const response = await axios(request);
//       let output;

//       if (url.endsWith('.zip')) {
//         output = unzip.Extract({ path: out });
//       } else {
//         const file = path.resolve(out, name);
//         output = fs.createWriteStream(file);
//       }

//       const stream = response.data
//         .pipe(output)
//         .on('finish', resolve)
//         .on('error', reject);
//     } catch (err) {
//       reject (err);
//     }
//   });
// }

// const csvStream = csv({
//   columns: true,
//   delimiter: ';',
//   trim: true,
// });

// transform: (source) => {
//   return {
//     id: source[i]['id'],
//     name: source[i]['name'],
//     slogan: source[i]['slogan'],
//     description: source[i]['description'],
//     category: source[i]['category'],
//     default_price: source[i]['default_price']
//   }
// }

// const dbs = new StreamToMongoDB({ process.env.DATABASE_URL, collection,  })