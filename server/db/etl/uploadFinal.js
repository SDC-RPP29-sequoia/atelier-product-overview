const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const { writeFinalJSON } = require('./writeFinalJSON.js');
const { readFinalJSON } = require('./readFinalJSON.js');
const { readStyleJSON } = require('./readStyleJSON.js');
const { readJSON } = require('./readJSON.js');

const csvjson = require('csvjson');
const papa = require('papaparse');


let combine = () => {
  let records = readFinalJSON(1);
  let styleRecords = readStyleJSON(1);
  let section = 0;

  styleRecords.forEach(async (style) => {
    if (style !== null) {

      let correctSection = Math.floor(style.product_id / 50000);
      let correctIndex = style.product_id % 50000;

      if (section !== correctSection) {

        writeFinalJSON(section, records);

        records = readFinalJSON(correctSection);
        section = correctSection;

        let number = Number(style.product_id);
      }
      records[correctIndex].styles.push(style);
    }
  });
  writeFinalJSON(section, records);
};

combine();

// const uploadFinal = () => {
  // let correctStyleIndex = style.id % 50000;
  // let correctStyleSection = Math.floor(style.id / 49999);

  // let correctIndex = style.product_id % 50000;

//   styleRecords.forEach((style) => {
//     if (style !== null) {
//       let correctSection = Math.floor(style.product_id / 50000);
//       let correctIndex = style.product_id % 50000;
//       let correctStyleIndex = style.id % 50000;
//       let correctStyleSection = Math.floor(style.id / 49999);

//       if (section !== correctSection) {

//         writeFinalJSON(section, records);

//         records = readFinalJSON(correctSection);
//         section = correctSection;
//       }

//       try {
//         records[correctIndex].styles.push(style);
//       } catch (err) {
//         console.log('Catch err: ', err);
//       }
//     }
//   });
//   writeFinalJSON(section, records);
// };
// uploadFinal();