const database = require('../models')

class LevelControllers {
  static async catchAllLevels (__, res) {
    try {
      const allLevels = await database.Levels.findAll()
      return res.status(200).json(allLevels)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async takeOneLevel (req, res) {
    const { id } = req.params
    try {
      const oneLevel = await database.Levels.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(oneLevel)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async createOneLevel (req, res) {
    const dados = req.body
    try {
      const createLevel = await database.Levels.create(dados)
      return res.status(200).json(createLevel)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async refreshLevel (req, res) {
    const { id } = req.params
    const dados = req.body
    try {
      await database.Levels.update(dados, { where: { id: Number(id) } })
      const updatedData = await database.Levels.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(updatedData)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async removeLevel (req, res) {
    const { id } = req.params
    try {
      await database.Levels.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `O id = ${id} removido` })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = LevelControllers
