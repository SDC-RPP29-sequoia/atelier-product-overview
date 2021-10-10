const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const { writeJSON } = require('./writeJSON.js');
const { readJSON } = require('./readJSON.js');

const features = 'docs/data/csv/features.csv';

let records = readJSON(0);
let section = 0;

csv.parseFile(features, { headers: true })
  .on('error', error => console.error('error', error))
  .on('data', (row) => {

    let correctSection = Math.floor(row.product_id / 50000); // 0 - 49,999 === 0
    let correctIndex = row.product_id % 50000; // 50,001

    if (section !== correctSection) {

      writeJSON(section, records);

      records = readJSON(correctSection);
      section = correctSection;
    }

    try {
      records[correctIndex].features.push(row);
    } catch (err) {
      console.log('row:', row);
    }

  })
  .on('end', () => {
    writeJSON(section, records);
  });
