const database = require('../models')
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
      const allClasses = await database.Classes.findAll({ where })
      return res.status(200).json(allClasses)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async singleClass (req, res) {
    const { id } = req.params
    try {
      const oneClass = await database.Classes.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(oneClass)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async createClass (req, res) {
    const data = req.body
    try {
      const newClass = await database.Classes.create(data)
      return res.status(200).json(newClass)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async updateClass (req, res) {
    const { id } = req.params
    const data = req.body
    try {
      await database.Classes.update(data, { where: { id: Number(id) } })
      const updatedClass = await database.Classes.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(updatedClass)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async removeClass (req, res) {
    const { id } = req.params
    try {
      await database.Classes.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `O id = ${id} removido` })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = ClassControllers
