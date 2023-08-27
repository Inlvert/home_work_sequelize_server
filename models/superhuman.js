"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superhuman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Superhuman.hasMany(models.Superpower, {
        foreignKey: 'superhumanId'
      });
    }
  }
  Superhuman.init(
    {
      nickName: {
        type: DataTypes.STRING,
        field: 'nick_name',
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      realName: {
        type: DataTypes.STRING,
        field: 'real_name',
        allowNull: false,
      },
      originDescription: {
        type: DataTypes.TEXT,
        field: 'origin_description',
        allowNull: false
      },
      catchPhrase: {
        type: DataTypes.STRING,
        field: 'catch_phrase',
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "Superhuman",
      tableName: 'superhumans',
      underscored: true,
    }
  );
  return Superhuman;
};
