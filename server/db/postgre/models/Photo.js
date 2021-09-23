/* eslint-disable camelcase */
const { Sequelize, DataTypes } = require('sequelize');

const Photo = sequelize.define('Photo', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  thumbnail_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  tableName: 'photo'
});

module.exports.Photo = Photo;