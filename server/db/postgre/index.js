const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sdc_product_overview', 'alexcakic', null, {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    freezeTableName: true
  }
});

sequelize
  .authenticate()
  .then(function (err) {
    console.log('Sequelize Connected');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });