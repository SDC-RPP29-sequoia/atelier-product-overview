require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.LOCAL_PORT || 3000;
const cors = require('cors');

const mongoose = require('./server/db/mongo');
const postgre = require('./server/db/postgre');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const productsRoute = require('./server/routes');
app.use('/products', productsRoute);

app.listen(port, () => console.log('Port ' + port + ' is on fire!'));

module.exports = app;