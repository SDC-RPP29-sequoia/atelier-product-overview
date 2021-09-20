const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const { writeFinalJSON } = require('./writeFinalJSON.js');
const { readFinalJSON } = require('./readFinalJSON.js');
const { readStyleJSON } = require('./readStyleJSON.js');
const { readJSON } = require('./readJSON.js');

const csvjson = require('csvjson');
const papa = require('papaparse');

let records = readFinalJSON(0);
let styleRecords = readStyleJSON(1);
let section = 0;
let styleSection = 0;

const uploadFinal = () => {

  styleRecords.forEach((style) => {
    if (style !== null) {
      let correctSection = Math.floor(style.product_id / 50000);
      let correctIndex = style.product_id % 50000;
      let correctStyleIndex = style.id % 50000;
      let correctStyleSection = Math.floor(style.id / 49999);

      if (section !== correctSection) {

        writeFinalJSON(section, records);

        records = readFinalJSON(correctSection);
        section = correctSection;
      }

      try {
        records[correctIndex].styles.push(style);
      } catch (err) {
        console.log('Catch err: ', err);
      }
    }
  });
  writeFinalJSON(section, records);
};
uploadFinal();