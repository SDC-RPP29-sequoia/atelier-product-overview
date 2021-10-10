/* eslint-disable camelcase */
const { Product } = require('../models/Product.js');
const { Style } = require('../models/Style.js');
const helper = require('./helper.js');
const redis = require('redis');

const client = redis.createClient(6379);

client.on('error', (error) => {
  console.error(error);
});

const cache = (req, res, next) => {
  const inputId = req.url.split('=')[1];

  client.get(inputId, (err, data) => {
    if (err) {
      throw err;
    }

    if (data !== null) {
      res.status(201).send(data);
    } else {
      next();
    }
  });
};

const cacheStyles = (req, res, next) => {
  const inputId = req.url.split('=')[1];

  client.get(inputId, (err, data) => {
    if (err) {
      throw err;
    }

    if (data !== null) {
      res.status(201).send(data);
    } else {
      next();
    }
  });
};


const getProducts = async (req, res) => {
  try {
    // add page and count
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProduct = async (req, res) => {
  const inputId = req.url.split('=')[1];
  let product;
  try {

    product = await Product.find({ id: parseInt(inputId) });
    helper.checkProduct(product[0]);

    client.setex(inputId, 3600, JSON.stringify(product[0]));

    if (product === null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }

    res.json(product[0]);

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getStyles = async (req, res) => {
  const inputId = req.url.split('=')[1].split('/')[0];
  let styles;
  let response = { product_id: inputId };
  try {
    styles = await Style.find({ product_id: inputId });
    helper.checkStyle(styles, inputId);

    response.results = styles;

    client.setex(inputId, 3600, JSON.stringify(response));

    res.json(response);
    if (styles === null) {
      return res.status(404).json({ message: 'Cannot find styles' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const putDescription = async (req, res) => {
  const inputId = req.params.product_id.split('=')[1];
  const filter = { 'id': inputId };
  const update = { description: req.body.description };

  let updateProduct = await Product.findOneAndUpdate(filter, { $set: update }, { new: true, upsert: true, returnOriginal: false });
  client.setex(inputId, 3600, JSON.stringify(updateProduct));

  res.send(updateProduct);
};

module.exports = {
  getProducts,
  getProduct,
  getStyles,
  putDescription,
  cache,
  cacheStyles
};