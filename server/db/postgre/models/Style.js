/* eslint-disable camelcase */
const { Sequelize, DataTypes } = require('sequelize');

const Style = sequelize.define('Style', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sale_price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  original_price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  default_style: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  tableName: 'style'
});

module.exports.Style = Style;