/* eslint-disable camelcase */
const { Product } = require('../models/Product.js');
const { Style } = require('../models/Style.js');
const helper = require('./helper.js');

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

    res.json(product[0]);
    if (product === null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
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
    res.json(response);
    if (styles === null) {
      return res.status(404).json({ message: 'Cannot find styles' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  getStyles,
};