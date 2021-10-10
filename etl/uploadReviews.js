/* eslint-disable camelcase */
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const { writeJSON } = require('./writeJSON.js');
const { readJSON } = require('./readJSON.js');

const reviews = 'docs/data/csv/reviews.csv';
let records = readJSON(0);
let section = 0;

csv.parseFile(reviews, {headers: true})
  .on('error', error => console.error(error))
  .on('data', (row) => {

    let correctSection = Math.floor(row.product_id / 50000); // 0 - 49,999 === 0
    let correctIndex = row.product_id % 50000; // 50,001

    // evaluate if not in correct section
    if (section !== correctSection) {
      // save our current records to [section].json
      writeJSON(section, records);
      // load correct records from csvData = [correctSection].json
      records = readJSON(correctSection);
      section = correctSection;
    }

    try {
      records[correctIndex].reviews.results.push(row);
      records[correctIndex].reviews.product = row.product_id;
    } catch (err) {
      console.log('row:', row);
    }

  })
  .on('end', () => {
    writeJSON(section, records);
  });