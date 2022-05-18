const bodyParser = require('body-parser')

const users = require('./usersRoute')
const levels = require('./levelsRoute')
const classes = require('./classesRoute')

module.exports = (app) => {
  app.use(bodyParser.json(), users, levels, classes)
}
