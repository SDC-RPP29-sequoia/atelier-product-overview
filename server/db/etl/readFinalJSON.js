const fs = require('fs');
const path = require('path');

module.exports.readFinalJSON = (section) => {

  let filePath = path.resolve(`docs/data/json/final/${section}.json`);

  try {
    console.log(`Loading section ${section}`);
    let data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    return [];
  }

};