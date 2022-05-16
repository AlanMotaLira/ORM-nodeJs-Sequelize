const database = require('../models')

class TurmaControllers {
  static async pegaTodasAsTurmas (req, res) {
    try {
      const todasAsTurmas = await database.Turmas.findAll()
      return res.status(200).json(todasAsTurmas)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async pegaUmaTurma (req, res) {
    const { id } = req.params
    try {
      const turma = await database.Turmas.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(turma)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async criarTurma (req, res) {
    const dados = req.body
    try {
      const novaTurma = await database.Turmas.create(dados)
      return res.status(200).json(novaTurma)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async atualizarTurma (req, res) {
    const { id } = req.params
    const dados = req.body
    try {
      await database.Turmas.update(dados, { where: { id: Number(id) } })
      const turmaAtualizada = await database.Turmas.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(turmaAtualizada)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async removerTurma (req, res) {
    const { id } = req.params
    try {
      await database.Turmas.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `O id = ${id} removido` })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = TurmaControllers
