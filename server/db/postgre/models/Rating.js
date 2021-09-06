/* eslint-disable camelcase */
const { Sequelize, DataTypes } = require('sequelize');

const Rating = sequelize.define('Rating', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  star_1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  star_2: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  star_3: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  star_4: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  star_5: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  tableName: 'rating'
});

module.exports.Rating = Rating;