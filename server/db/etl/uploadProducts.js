/* eslint-disable camelcase */
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const { writeJSON } = require('./writeJSON.js');
const { readJSON } = require('./readJSON.js');

const products = 'docs/data/csv/product.csv';
let csvData = [];
let section = 0;

csv.parseFile(products, {headers: true})
  .on('error', error => console.error(error))
  .on('data', (row) => {

    let correctSection = Math.floor(row.id / 50000); // 0 - 49,999 === 0
    let correctIndex = row.id % 50000; // 50,001

    // evaluate if not in correct section
    if (section !== correctSection) {
      // save our current records to [section].json
      writeJSON(section, csvData);
      // load correct records from csvData = [correctSection].json
      csvData = readJSON(correctSection);
      section = correctSection;
    }

    let newObj = {
      id: row.id,
      name: row.name,
      slogan: row.slogan,
      description: row.description,
      category: row.category,
      default_price: row.default_price,
      styles: [],
      features: [],
    };
    csvData[correctIndex] = newObj;
  })
  .on('end', () => {

    writeJSON(section, csvData);
    console.log('Done writing products');
  });
