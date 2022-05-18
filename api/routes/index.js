const bodyParser = require('body-parser')

const users = require('./usersRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = (app) => {
  app.use(bodyParser.json(), users, niveis, turmas)
}
