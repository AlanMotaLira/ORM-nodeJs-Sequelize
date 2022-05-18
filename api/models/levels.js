'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Levels extends Model {
    static associate (models) {
      Levels.hasMany(models.Classes, {
        foreignKey: 'level_id'
      })
    }
  }
  Levels.init({
    descr_level: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 50],
          msg: 'Por favor, informe o nível'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Levels',
    paranoid: true
  })
  return Levels
}
