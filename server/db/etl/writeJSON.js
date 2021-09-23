const fs = require('fs');
const path = require('path');

module.exports.writeJSON = (section, data) => {

  let filePath = path.resolve(`docs/data/json/${section}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

};