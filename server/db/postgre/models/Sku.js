/* eslint-disable camelcase */
const { Sequelize, DataTypes } = require('sequelize');

const Sku = sequelize.define('Sku', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  tableName: 'sku'
});

module.exports.Sku = Sku;