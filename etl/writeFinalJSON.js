const fs = require('fs');
const path = require('path');

module.exports.writeFinalJSON = (section, data) => {

  let filePath = path.resolve(`docs/data/json/final/${section}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

};