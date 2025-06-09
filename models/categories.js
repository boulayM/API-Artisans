const { DataTypes } = require('sequelize');
const { sequelize } = require ('../db/mysql');

const Categories = sequelize.define(
  'categories',
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    categorie : {
        type: DataTypes.STRING,
              allowNull: false,
          
    },

}
);


module.exports = Categories;