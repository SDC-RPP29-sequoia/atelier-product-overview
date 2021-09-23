/* eslint-disable camelcase */
const { Sequelize, DataTypes } = require('sequelize');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slogan: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  default_price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  tableName: 'product'
});

module.exports.Product = Product;