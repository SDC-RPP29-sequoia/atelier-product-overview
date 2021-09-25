/* eslint-disable camelcase */
/* eslint-disable quotes */
require('dotenv').config();
const mongoose = require('mongoose');

const { Product } = require('../../../../../server/db/mongo/models/Product.js');
const { Style } = require('../../../../../server/db/mongo/models/Style.js');
const helper = require('../../../../../server/db/mongo/controller/helper.js');


const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomNumbers = (first, last) => {
  const numberObj = {};
  const rando1 = getRandomIntInclusive(first, last);
  const rando2 = getRandomIntInclusive(first, last);
  const rando3 = getRandomIntInclusive(first, last);
  const rando4 = getRandomIntInclusive(first, last);
  numberObj.first = rando1;
  numberObj.second = rando2;
  numberObj.third = rando3;
  numberObj.forth = rando4;

  const unique = Array.from(new Set(Object.values(numberObj)));
  if (!unique.length === 4) {
    return getRandomNumbers(first, last);
  }
  return numberObj;
};

describe('Connect to Mongoose', () => {
  let connection;

  beforeAll(() => {
    let connection;
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', (error) => console.error(error));
    db.once('connected', () => console.log('Mongoose Connected'));
  });

  afterAll(() => {
    mongoose.disconnect();
  });
  // })

  describe('Mongo Queries', () => {
    describe('query speed', () => {
      describe('random product between 1 - 100k', () => {
        const random = getRandomNumbers(1, 25000);
        it(`should return a query in less than 5ms for product id ${random.first}`, async () => {
          const inputId = random.first;
          const product = await Product.find({ id: inputId }).explain().then(res => res[0]);
          const executionTime = product.executionStats.executionTimeMillis;
          expect(executionTime).toBe(4);
        });
      });
      describe('random product between 100k and 200k', () => {
        const random = getRandomNumbers(1, 25000);

        it(`should take an input of empty styles array and output a temporary mock array for product id 11`, async () => {
          const inputId = random.first;
          let response = { product_id: inputId };
          const styles = await Style.find({ product_id: inputId }).explain().then(res => res[0]);
          const executionTime = styles.executionStats.executionTimeMillis;
          expect(executionTime).toBe(0);
          expect(styles.length).not.toEqual(0);
        });
      });
    });
    xdescribe('random product between 200k - 300k', () => {
      const random = getRandomNumbers(1, 25000);
      it(`should take an input of a product and output an object for product id ${random.first}`, async () => {
        let product;
        const inputId = random.first;
        product = await Product.find({ id: parseInt(inputId) });
        expect(Array.isArray(product)).toEqual(true);
        expect(typeof product[0]).toEqual('object');
      });
    });
    xdescribe('random product between 300k - 400k', () => {
      it(`should accept a product object with no feature value and output a product with added mock feature value`, async () => {
        let product;
        const inputId = '2';
        product = await Product.find({ id: parseInt(inputId) });
        expect(Array.isArray(product)).toEqual(true);
        expect(typeof product[0]).toEqual('object');
        let finalProduct = helper.checkProduct(product[0]);
        expect(finalProduct.features[1].value).toEqual(`No UV Protection`);
      });
    });
  });
});
