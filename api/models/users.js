"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Turmas, {
        foreignKey: "docente_id",
      });
      Users.hasMany(models.Matriculas, {
        foreignKey: "estudante_id",
        scope:{status:'confirmado'},
        as:'registeredClasses'
      });
    }
  }
  Users.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [2, 50],
            msg: "Por favor, informe o nome",
          },
        },
      },
      active: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "dados de email inválido",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
      paranoid: true,
      defaultScope: {
        where: { active: true },
      },
      scopes: {
        todos: { where: {} },
      },
    }
  );
  return Users;
};
