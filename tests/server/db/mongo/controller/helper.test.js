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
  beforeAll(() => {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', (error) => console.error(error));
    db.once('connected', () => console.log('Mongoose Connected'));
  });

  afterAll(() => {
    mongoose.disconnect();
  });
  // })

  describe('Helper Methods', () => {
    describe('checkStyles', () => {
      describe('random product between 1 - 100k', () => {
        it(`should take an input of a styles array and output an array of all styles for a random product id`, async () => {
          const inputId = await randomNum();
          let styles;
          styles = await Style.find({ product_id: inputId });
          const finalStyles = helper.checkStyle(styles, inputId);
          expect(Array.isArray(styles)).toEqual(true);
          expect(styles.length).not.toEqual(0);
          expect(Array.isArray(finalStyles)).toEqual(true);
        });
      });
      describe('Product with no styles', () => {
        it(`should take an input of empty styles array and output a temporary mock array for product id 11`, async () => {
          let styles;
          const inputId = '11';
          styles = await Style.find({ product_id: inputId });
          expect(styles.length).toEqual(0);
          const finalStyles = helper.checkStyle(styles, inputId);
          expect(Array.isArray(styles)).toEqual(true);
          expect(Array.isArray(finalStyles)).toEqual(true);
          expect(finalStyles[0].name).toEqual('No available styles');
          expect(finalStyles.length).toEqual(1);
        });
      });
    });
    describe('checkProduct', () => {
      describe('random product between 1 - 100k', () => {
        it(`should take an input of a product and output an object for a random product id`, async () => {
          let inputId = await randomNum();
          let product;
          product = await Product.find({ id: parseInt(inputId) });
          expect(Array.isArray(product)).toEqual(true);
          expect(typeof product).toEqual('object');
        });
      });
      describe('Product with no feature value', () => {
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
});