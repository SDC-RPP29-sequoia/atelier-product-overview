/* eslint-disable camelcase */
require('dotenv').config();
const express = require('express');
const redis = require('redis');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const port_redis = process.env.REDIS_PORT || 6379;
const port = process.env.LOCAL_PORT || 3000;

const redis_client = redis.createClient(port_redis);
const app = express();

const mongoose = require('./server/db/mongo');
// const postgre = require('./server/db/postgre');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const productsRoute = require('./server/routes');
app.use('/', productsRoute);

app.listen(port, () => console.log('Port ' + port + ' is on fire!'));

module.exports = app;