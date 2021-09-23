const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const { writeStyleJSON } = require('./writeStyleJSON.js');
const { readStyleJSON } = require('./readStyleJSON.js');

const photos = 'docs/data/csv/photos/photos6mil.csv';

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