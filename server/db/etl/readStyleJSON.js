const fs = require('fs');
const path = require('path');

module.exports.readStyleJSON = (section) => {

  let filePath = path.resolve(`docs/data/json/styleObject/test/${section}.json`);

  try {
    console.log(`Loading style section ${section}`);
    let data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    return [];
  }

};