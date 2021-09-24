/* eslint-disable func-style */
const express = require('express');
const router = express.Router();
const controller = require('./db/mongo/controller/products.js');

router.get('/products', controller.getProducts);
router.get('/products/:product_id', controller.getProduct);
router.get('/products/:product_id/styles', controller.getStyles);

module.exports = router;