'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasOne(models.profile, {
        as: "profile",
        foreignKey: {
          name: "idUser",
        },
      });
      user.hasMany(models.transaction, {
        as: "transaction",
        foreignKey: {
          name: "idUser",
        },
      });
      user.hasMany(models.artikebuy, {
        as: "artikebuy",
        foreignKey: {
          name: "idUser",
        },
      });
    }
  }
  user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    coin: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};