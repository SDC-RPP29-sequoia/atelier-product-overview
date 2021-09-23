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
      }
      records[correctIndex].styles.push(style);
    }
  });
  writeFinalJSON(section, records);
};

combine();