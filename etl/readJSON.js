const fs = require('fs');
const path = require('path');

module.exports.readJSON = (section) => {

  let filePath = path.resolve(`docs/data/json/product/${section}.json`);

  try {
    console.log(`Loading section ${section}`);
    let data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    return [];
  }

};