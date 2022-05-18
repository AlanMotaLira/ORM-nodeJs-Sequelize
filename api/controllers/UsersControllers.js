const { UsersServices, EnrollmentServices } = require('../services')
const usersServices = new UsersServices()
const enrollmentServices = new EnrollmentServices()
const database = require('../models')
const sequelize = require('sequelize')

class UserController {
  static async consultActiveUsers (__, res) {
    try {
      const activeUsers = await usersServices.consultRegistration()
      return res.status(200).json(activeUsers)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async consultAllUsers (__, res) {
    try {
      const allUsers = await usersServices.consultAll()
      return res.status(200).json(allUsers)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async consultSingleUser (req, res) {
    const { id } = req.params
    try {
      const use = await usersServices.consultSingleRegistration({
        id: Number(id)
      })
      return res.status(200).json(use)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async registerUser (req, res) {
    const newUse = req.body
    try {
      const newUseCreate = await usersServices.createRecord(newUse)
      return res.status(201).json(newUseCreate)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async updateUser (req, res) {
    const { id } = req.params
    const updatedData = req.body
    try {
      await usersServices.updateRegister(updatedData, Number(id))
      const UserUpdated = await usersServices.consultSingleRegistration({
        id: Number(id)
      })
      return res.status(202).json(UserUpdated)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async removeUser (req, res) {
    const { id } = req.params
    try {
      await usersServices.removeRecord(id)
      return res.status(202).json({ message: `O id = ${id} removido` })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async restoreUser (req, res) {
    const { id } = req.params
    try {
      await usersServices.restoreRecord(id)
      return res.status(202).json({ message: `O id = ${id} foi restaurado` })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async consultSingleEnrollment (req, res) {
    const { idUser, idRegistration } = req.params
    try {
      const anEnrollment = await enrollmentServices.consultSingleRegistration({
        id: Number(idRegistration),
        student_id: Number(idUser)
      })
      return res.status(200).json(anEnrollment)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async createEnrollment (req, res) {
    const { idUser } = req.params
    const newEnrollment = { ...req.body, student_id: Number(idUser) }
    try {
      const newEnrollmentCreated = await database.Enrollment.create(
        newEnrollment
      )
      return res.status(201).json(newEnrollmentCreated)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async studentEnrollment (req, res) {
    const { id } = req.params
    try {
      const use = await usersServices.consultSingleRegistration({
        id: Number(id)
      })
      const register = await use.getRegisteredClasses()
      return res.status(200).json(register)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async returnEnrollmentsPorClasses (req, res) {
    const { classId } = req.params
    try {
      const allEnrollment = await database.Enrollment.findAndCountAll({
        where: {
          class_id: Number(classId),
          status: 'confirmado'
        },
        order: [['student_id', 'DESC']]
      })
      res.status(200).json(allEnrollment)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async fullClasses (__, res) {
    const limitPerClass = 2
    try {
      const full = await database.Enrollment.findAndCountAll({
        where: {
          status: 'confirmado'
        },
        attributes: ['class_id'],
        group: ['class_id'],
        having: sequelize.literal(`count(class_id) >= ${limitPerClass}`)
      })
      return res.status(200).json(full.count)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async cancelUser (req, res) {
    const { id } = req.params
    try {
      database.sequelize.transaction(async (t) => {
        await database.Users.update(
          { active: false },
          { where: { id: Number(id) } },
          { transaction: t }
        )
        await database.Enrollment.update(
          { status: 'cancelado' },
          { where: { student_id: Number(id) } },
          { transaction: t }
        )
        return res.status(202).json({
          message: `matriculas referente ao estudande do id ${id} foram canceladas`
        })
      })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = UserController
