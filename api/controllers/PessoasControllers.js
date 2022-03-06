const database = require("../models");

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async pegaUmaPessoa(req, res) {
    const { id } = req.params;
    try {
      const pessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoa);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  static async criarPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  static async atualizarRegistro(req, res) {
    const { id } = req.params;
    const atualizarPessoa = req.body;
    try {
      await database.Pessoas.update(atualizarPessoa, {
        where: { id: Number(id) },
      });
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaAtualizada);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  static async removerPessoa(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return res.state(200).json({ mensagem: `O id = ${id} removido` });
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

module.exports = PessoaController;
