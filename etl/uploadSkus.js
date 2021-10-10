const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const { writeStyleJSON } = require('./writeStyleJSON.js');
const { readStyleJSON } = require('./readStyleJSON.js');

const skus = 'docs/data/csv/skus.csv';

let records = readStyleJSON(0);
let section = 0;

csv.parseFile(skus, { headers: true })
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
      records[correctIndex].skus[row.id] = { styleId: row.styleId, quantity: row.quantity, size: row.size };
    } catch (err) {
      console.log('err: ', err);
    }
  })
  .on('end', () => {
    writeStyleJSON(section, records);
  });