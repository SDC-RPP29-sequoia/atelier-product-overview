/* eslint-disable func-style */
const express = require('express');
const router = express.Router();
const controller = require('./db/mongo/controller/products.js');

// Get all products
router.get('/', controller.getProducts);
// Get one product by product id
router.get('/:product_id', controller.getProduct);
// Get all styles along with nested skus and photos
router.get('/:product_id/styles', controller.getStyles);
// Get review and rating data
router.get('/reviews/', controller.getRatings);

module.exports = router;