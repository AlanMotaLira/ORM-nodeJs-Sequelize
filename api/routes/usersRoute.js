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
  .get(
    '/users/enrollment/:classId/confirmed',
    UserController.returnEnrollmentsPorClasses
  )
  .get('/users/enrollment/full', UserController.fullClasses)
  .post('/users', UserController.registerUser)
  .post('users/:idUser/enrollment', UserController.createEnrollment)
  .post('/users/:id/cancel', UserController.cancelUser)
  .put('/users/:id', UserController.updateUser)
  .post('/users/:id', UserController.restoreUser)
  .delete('/users/:id', UserController.removeUser)

module.exports = router
