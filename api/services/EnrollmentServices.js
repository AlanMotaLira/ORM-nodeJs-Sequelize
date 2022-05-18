const Services = require('./Services')
const sequelize = require('sequelize')

class UsersServices extends Services {
  constructor () {
    super('Enrollment')
  }
}
module.exports = UsersServices
