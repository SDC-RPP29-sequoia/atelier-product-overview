/* eslint-disable func-style */
const express = require('express');
const router = express.Router();
const Product = require('./db/mongo/models/product.js');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.send('Getting all products');
});

// Get one product
router.get('/:product_id', getProduct, (req, res) => {
  res.send(req.params.product_id);
});

const Style = require('./db/mongo/models/style.js');

// Get all styles
router.get('/:product_id/styles', async (req, res) => {
  try {
    // find styles by product id
    const style = await Style.find();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (product === null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.product = product;
  next();
}

module.exports = router;