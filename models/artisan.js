const { DataTypes } = require('sequelize');
const { sequelize } = require ('../db/mysql');

const Artisan = sequelize.define(
  'artisans',
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    specialite : {
      type: DataTypes.STRING,
      allowNull: false,
    },

    note : {

      type: DataTypes.DECIMAL(2,1),
      allowNull: false,
    },

    ville : {
        type: DataTypes.STRING,
              allowNull: false,
    },

    apropos : {
        type: DataTypes.STRING,
              allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
              allowNull: false,
    },
    site : {
        type: DataTypes.STRING,
              allowNull: true,
    },

    categorie : {
        type: DataTypes.STRING,
              allowNull: false,
          
    },

  top : {
        type: DataTypes.TINYINT,
              allowNull: false,
    },
}
);


module.exports = Artisan;