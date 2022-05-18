const database = require('../models')

class UserController {
  static async consultActiveUsers (__, res) {
    try {
      const activeUsers = await database.Users.findAll()
      return res.status(200).json(activeUsers)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async consultAllUsers (__, res) {
    try {
      const allUsers = await database.Users.scope('todos').findAll()
      return res.status(200).json(allUsers)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async consultSingleUser (req, res) {
    const { id } = req.params
    try {
      const use = await database.Users.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(use)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async registerUser (req, res) {
    const newUse = req.body
    try {
      const newUseCreate = await database.Users.create(newUse)
      return res.status(200).json(newUseCreate)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async updateUser (req, res) {
    const { id } = req.params
    const updatedData = req.body
    try {
      await database.Users.update(updatedData, {
        where: { id: Number(id) }
      })
      const UserUpdated = await database.Users.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(UserUpdated)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async removeUser (req, res) {
    const { id } = req.params
    try {
      await database.Users.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `O id = ${id} removido` })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async restoreUser (req, res) {
    const { id } = req.params
    try {
      await database.Users.restore({ where: { id: Number(id) } })
      return res.status(200).json({ message: `O id = ${id} foi restaurado` })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async returnUnicaEnrollment (req, res) {
    const { idUser, idRegistration } = req.params
    try {
      const anEnrollment = await database.Matriculas.findOne({
        where: {
          id: Number(idRegistration),
          estudante_id: Number(idUser)
        }
      })
      return res.status(200).json(anEnrollment)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async createEnrollment (req, res) {
    const { idUser } = req.params
    const newEnrollment = { ...req.body, estudante_id: Number(idUser) }
    try {
      const newEnrollmentCreated = await database.Matriculas.create(
        newEnrollment
      )
      return res.status(200).json(newEnrollmentCreated)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async studentEnrollment(req,res){
    const {studentId} = req.params
    try{
      const use = await database.Users.findOne({where:{id:Number(studentId)}})
      const register = await use.getRegisteredClasses()
      return res.status(200).json(register)
    }catch(err){
      return res.status(500).json(err.message)
    }
  }
}

module.exports = UserController
