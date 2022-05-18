const { LevelServices } = require('../services')
const levelServices = new LevelServices()

class LevelControllers {
  static async catchAllLevels (__, res) {
    try {
      const allLevels = await levelServices.consultRegistration()
      return res.status(200).json(allLevels)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async takeOneLevel (req, res) {
    const { id } = req.params
    try {
      const oneLevel = await levelServices.consultSingleRegistration({
        id: Number(id)
      })
      return res.status(200).json(oneLevel)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async createOneLevel (req, res) {
    const dados = req.body
    try {
      const createLevel = await levelServices.createRecord(dados)
      return res.status(200).json(createLevel)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async refreshLevel (req, res) {
    const { id } = req.params
    const dados = req.body
    try {
      await levelServices.updateRegister(dados, id)
      const updatedData = await levelServices.consultSingleRegistration({
        id: Number(id)
      })
      return res.status(200).json(updatedData)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async removeLevel (req, res) {
    const { id } = req.params
    try {
      await levelServices.removeRecord(id)
      return res.status(200).json({ mensagem: `O id = ${id} removido` })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async restoreLevel (req, res) {
    const { id } = req.params
    try {
      await levelServices.restoreRecord(id)
      return res.status(200).json({ mensagem: `O id = ${id} foi restaurado` })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = LevelControllers
