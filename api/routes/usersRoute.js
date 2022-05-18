const { Router } = require('express')
const { UserController } = require('../controllers')

const router = Router()

router
  .get('/users', UserController.consultActiveUsers)
  .get('/users/all', UserController.consultAllUsers)
  .get('/users/:id', UserController.consultSingleUser)
  .get(
    '/users/:idUser/enrollment/:idRegistration',
    UserController.consultSingleEnrollment
  )
  // verificado até aqui
  .get('/users/:id/enrollment', UserController.studentEnrollment)
  .get(
    '/users/enrollment/:classId/confirmed',
    UserController.returnEnrollmentsPorClasses
  )
  .get('/users/enrollment/full', UserController.fullClasses)
  .post('/users', UserController.registerUser)
  .post('users/:idUser/enrollment', UserController.createEnrollment)
  .post('/users/:id/cancel', UserController.cancelUser)
  .post('/users/:id', UserController.restoreUser)
  .put('/users/:id', UserController.updateUser)
  .delete('/users/:id', UserController.removeUser)

module.exports = router
