const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const { writeStyleJSON } = require('./writeStyleJSON.js');
const { readStyleJSON } = require('./readStyleJSON.js');

const photos = 'docs/data/csv/photos/photos5mil.csv';

let records = readStyleJSON(0);
let section = 0;

csv.parseFile(photos, { headers: ['id', 'styleId', 'url', 'thumbnail_url'] })
  .on('error', error => console.error('error', error))
  .on('data', (row) => {

    let correctSection = Math.floor(row.styleId / 50000);
    let correctIndex = row.styleId % 50000;

    if (section !== correctSection) {

      writeStyleJSON(section, records);

      records = readStyleJSON(correctSection);
      section = correctSection;
    }

    try {
      records[correctIndex].photos.push(row);
    } catch (err) {
      console.log('row: ', row);
    }
  })
  .on('end', () => {
    writeStyleJSON(section, records);
  });

// const uploadPhotos = async () => {

//   records = await readJSON(4);

//   csv.parseFile(features, { headers: true, skipRows: 1000000 })
//     .on('error', error => console.error('error', error))
//     .on('data', (row) => {

//       let correctSection = Math.floor(row.product_id / 50000); // 0 - 49,999 === 0
//       let correctIndex = row.product_id % 50000; // 50,001

//       if (section !== correctSection) {

//         writeJSON(section, records);
//       }

//       records = records.filter((item) => {
//         item.styles.forEach(async (style) => {
//           if (row.styleId === style.id) {
//             await style.photos.push(row);
//           }
//         });
//         return item;
//       });

//     })
//     .on('end', () => {
//       destinationPhotos.write(JSON.stringify(records));
//       console.log('Done writing photos');
//     });
// };

// uploadPhotos();