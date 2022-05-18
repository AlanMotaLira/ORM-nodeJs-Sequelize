const Services = require('./Services')
const dataBase = require('../models')
const sequelize = require('sequelize')

class UsersServices extends Services {
  constructor () {
    super('Users')
    this.enrollment = new Services('Enrollment')
  }

  async consultAll () {
    return dataBase[this.modelName].scope('todos').findAll()
  }

  async removeUseAndEnrollment (id) {
    return dataBase.sequelize.transaction(async (t) => {
      await super.updateRegister({ active: false }, id, { transaction: t })
      await this.enrollment.updateRegister({ status: 'cancelado' }, id, {
        transaction: t
      })
    })
  }
}
module.exports = UsersServices
