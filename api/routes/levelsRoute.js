const { Router } = require('express')
const { LevelControllers } = require('../controllers')

const router = Router()

router
  .get('/levels', LevelControllers.catchAllLevels)
  .get('/levels/:id', LevelControllers.takeOneLevel)
  .post('/levels', LevelControllers.createOneLevel)
  .post('/levels/:id/restore', LevelControllers.restoreLevel)
  .put('/levels/:id', LevelControllers.refreshLevel)
  .delete('/levels/:id', LevelControllers.removeLevel)

module.exports = router
