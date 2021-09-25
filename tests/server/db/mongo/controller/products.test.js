/* eslint-disable camelcase */
/* eslint-disable quotes */
require('dotenv').config();
const mongoose = require('mongoose');

const { Product } = require('../../../../../server/db/mongo/models/Product.js');
const { Style } = require('../../../../../server/db/mongo/models/Style.js');
const helper = require('../../../../../server/db/mongo/controller/helper.js');


const randomNum = async () => {
  const { randomInt } = await import('crypto');

  randomInt(1000011, (err, n) => {
    if (err) {
      throw err;
    } else {
      console.log(`Random number chosen from (0, 1000011): ${n}`);
      return n;
    }
  });
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
        it(`should return a query in less than 5ms for a random product id`, async () => {
          const inputId = await randomNum();
          const product = await Product.find({ id: inputId }).explain().then(res => res[0]);
          const executionTime = product.executionStats.executionTimeMillis;
          expect(executionTime).toBe(4);
        });
      });
      describe('random product between 100k and 200k', () => {
        it(`should take an input of empty styles array and output a temporary mock array for product id 11`, async () => {
          const inputId = await randomNum();
          let response = { product_id: inputId };
          const styles = await Style.find({ product_id: inputId }).explain().then(res => res[0]);
          const executionTime = styles.executionStats.executionTimeMillis;
          expect(executionTime).toBe(0);
          expect(styles.length).not.toEqual(0);
        });
      });
    });
    xdescribe('random product between 200k - 300k', () => {
      it(`should take an input of a product and output an object for a random product id`, async () => {
        let product;
        const inputId = await randomNum();
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
