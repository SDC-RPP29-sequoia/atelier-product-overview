/* eslint-disable func-style */
const express = require('express');
const router = express.Router();
const controller = require('./db/mongo/controller/products.js');

router.get('/products', controller.getProducts);
router.get('/products/:product_id', controller.cache, controller.getProduct);
router.get('/products/:product_id/styles', controller.cacheStyles, controller.getStyles);
router.put('/products/:product_id', controller.cache, controller.putDescription);

module.exports = router;