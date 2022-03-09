const database = require("../models");

class NivelControllers {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await database.Niveis.findAll();
      return res.status(200).json(todosOsNiveis);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params;
    try {
      const umNivel = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umNivel);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async criarUmNivel(req, res) {
    const dados = req.body;
    try {
      const criarNivel = await database.Niveis.create(dados);
      return res.status(200).json(criarNivel);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async atualziarNivel(req, res) {
    const { id } = req.params;
    const dados = req.body;
    try {
      await database.Niveis.update(dados, { where: { id: Number(id) } });
      const dadoAtualizado = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(dadoAtualizado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async removerNivel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `O id = ${id} removido` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = NivelControllers;
