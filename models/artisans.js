const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


const Artisan = sequelize.define(
  'artisan',
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
    email: {
        type: DataTypes.STRING,
              allowNull: false,
    },
    site : {
        type: DataTypes.STRING,
              allowNull: true,
    },

    apropos : {
        type: DataTypes.STRING,
              allowNull: false,
    },

    note : {
        type: DataTypes.DECIMAL(2,1),
              allowNull: false,
    },

    top : {
        type: DataTypes.BOOLEAN,
              allowNull: false,
    },

    categorie : {
        type: DataTypes.INTEGER,
              allowNull: false,
          
    },

    specialite : {
        type: DataTypes.INTEGER,
              allowNull: false,
    },

    ville : {
        type: DataTypes.INTEGER,
              allowNull: false,
    }
    
}
);


module.exports = Artisan;