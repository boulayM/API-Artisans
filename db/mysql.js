const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('artisans_r_a', 'admin', '2*/3_7mN', {
  host: '127.0.0.1',
  dialect: 'mariadb'
});

exports.dbConnection = async () => {
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

exports.sequelize = sequelize