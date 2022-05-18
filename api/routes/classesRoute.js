const { Router } = require('express')
const { ClassControllers } = require('../controllers')

const router = Router()

router
  .get('/classes', ClassControllers.catchAllClasses)
  .get('/classes/:id', ClassControllers.singleClass)
  .post('/classes', ClassControllers.createClass)
  .post('/classes/:id/restore', ClassControllers.restoreClass)
  .put('/classes/:id', ClassControllers.updateClass)
  .delete('/classes/:id', ClassControllers.removeClass)

module.exports = router
