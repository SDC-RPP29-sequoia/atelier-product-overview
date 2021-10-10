const fs = require('fs');
const path = require('path');

module.exports.writeReviewJSON = (section, data) => {

  let filePath = path.resolve(`docs/data/json/review/${section}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};