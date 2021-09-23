const { Sequelize, DataTypes } = require('sequelize');

const Feature = sequelize.define('Feature', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  feature: {
    type: DataTypes.STRING,
    allowNull: false
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  tableName: 'feature'
});

module.exports.Feature = Feature;