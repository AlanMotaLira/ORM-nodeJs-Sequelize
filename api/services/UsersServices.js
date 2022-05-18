const Services = require('./Services')
const dataBase = require('../models')

class UsersServices extends Services {
  constructor () {
    super('Users')
  }

  consultAll () {
    return dataBase[this.modelName].scope('todos').findAll()
  }
}
module.exports = UsersServices
