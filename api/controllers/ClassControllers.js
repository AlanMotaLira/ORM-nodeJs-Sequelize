const { ClassServices } = require('../services')
const classServices = new ClassServices()
const sequelize = require('sequelize')

class ClassControllers {
  static async catchAllClasses (req, res) {
    const { initialDate, finalDate } = req.query
    const where = {}

    if (initialDate || finalDate) {
      where.start_date = {}
      if (initialDate) where.start_date[sequelize.Op.gte] = initialDate
      if (finalDate) where.start_date[sequelize.Op.lte] = finalDate
    }

    try {
      const allClasses = await classServices.consultRegistration({ ...where })
      return res.status(200).json(allClasses)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async singleClass (req, res) {
    const { id } = req.params
    try {
      const oneClass = await classServices.consultSingleRegistration({
        id: Number(id)
      })
      return res.status(200).json(oneClass)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async createClass (req, res) {
    const data = req.body
    try {
      const newClass = await classServices.createRecord(data)
      return res.status(200).json(newClass)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async updateClass (req, res) {
    const { id } = req.params
    const data = req.body
    try {
      await classServices.updateRegister(data, id)
      const updatedClass = await classServices.consultSingleRegistration({
        id: Number(id)
      })
      return res.status(200).json(updatedClass)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async removeClass (req, res) {
    const { id } = req.params
    try {
      await classServices.removeRecord(id)
      return res.status(200).json({ mensagem: `O id = ${id} removido` })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async restoreClass (req, res) {
    const { id } = req.params
    try {
      await classServices.restoreRecord(id)
      return res.status(200).json({ mensagem: `O id = ${id} foi restaurado` })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = ClassControllers
