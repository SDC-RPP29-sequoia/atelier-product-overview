const fs = require('fs');
const path = require('path');

module.exports.readReviewJSON = (section) => {

  let filePath = path.resolve(`docs/data/json/review/${section}.json`);

  try {
    console.log(`Loading review section ${section}`);
    let data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    return [];
  }

};