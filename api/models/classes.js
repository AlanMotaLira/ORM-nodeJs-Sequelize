'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    static associate (models) {
      Classes.hasMany(models.Enrollment, {
        foreignKey: 'class_id'
      })
      Classes.belongsTo(models.Users, {
        foreignKey: 'teacher_id'
      })
      Classes.belongsTo(models.Levels, {
        foreignKey: 'level_id'
      })
    }
  }
  Classes.init(
    {
      start_date: DataTypes.DATEONLY
    },
    {
      sequelize,
      modelName: 'Classes',
      paranoid: true
    }
  )
  return Classes
}
