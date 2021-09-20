/* eslint-disable camelcase */
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const { writeStyleJSON } = require('./writeStyleJSON.js');
const { readStyleJSON } = require('./readStyleJSON.js');

const styles = 'docs/data/csv/styles.csv';
let csvData = [];
let section = 0;

csv.parseFile(styles, {headers: true})
  .on('error', error => console.error(error))
  .on('data', (row) => {

    let correctSection = Math.floor(row.id / 50000); // 0 - 49,999 === 0
    let correctIndex = row.id % 50000; // 50,001

    // evaluate if not in correct section
    if (section !== correctSection) {
      // save our current records to [section].json
      writeStyleJSON(section, csvData);
      // load correct records from csvData = [correctSection].json
      csvData = readStyleJSON(correctSection);
      section = correctSection;
    }

    let newObj = {
      id: row.id,
      product_id: row.productId,
      name: row.name,
      sale_price: row.sale_price,
      original_price: row.original_price,
      default_style: row.default_style,
      skus: {},
      photos: []
    };

    csvData[correctIndex] = newObj;
  })
  .on('end', () => {

    writeStyleJSON(section, csvData);
    console.log('Done writing products');
  });
