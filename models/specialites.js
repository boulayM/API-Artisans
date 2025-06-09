const { DataTypes } = require('sequelize');
const { sequelize } = require ('../db/mysql');

const Specialites = sequelize.define(
  'specialites',
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    specialite : {
        type: DataTypes.STRING,
              allowNull: false,
          
    },

}
);


module.exports = Specialites;