const { DataTypes } = require('sequelize');
const { sequelize } = require ('../db/mysql');

const Villes = sequelize.define(
  'villes',
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    ville : {
        type: DataTypes.STRING,
              allowNull: false,
          
    },

}
);


module.exports = Villes;