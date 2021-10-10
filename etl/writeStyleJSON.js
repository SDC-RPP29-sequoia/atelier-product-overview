const fs = require('fs');
const path = require('path');

module.exports.writeStyleJSON = (section, data) => {

  let filePath = path.resolve(`docs/data/json/styleObject/test/${section}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};