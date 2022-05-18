const Services = require('./Services')
const dataBase = require('../models')

class UsersServices extends Services {
  constructor () {
    super('Enrollment')
  }

  async countEnrollment (where, dataFilter) {
    return dataBase[this.modelName].findAndCountAll({
      where: { ...where }, ...dataFilter
    })
  }
}
module.exports = UsersServices
