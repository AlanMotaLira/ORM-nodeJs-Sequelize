const { Router } = require('express')
const { UserController } = require('../controllers')

const router = Router()

router
  .get('/users', UserController.consultActiveUsers)
  .get('/users/all', UserController.consultAllUsers)
  .get('/users/:id', UserController.consultSingleUser)
  .get(
    '/users/:idUser/enrollment/:idRegistration',
    UserController.returnUnicaEnrollment
  )
  .get('/users/:studentId/enrollment', UserController.studentEnrollment)
  .post('/users', UserController.registerUser)
  .post('users/:idUser/enrollment', UserController.createEnrollment)
  .put('/users/:id', UserController.updateUser)
  .post('/users/:id', UserController.restoreUser)
  .delete('/users/:id', UserController.removeUser)

module.exports = router
