const { Router } = require('express')
const { PessoaController } = require('../controllers/')

const router = Router()

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .get(
    '/pessoas/:idUsuario/matriculas/:idMatricula',
    PessoaController.pegaUmaMatricula
  )
  .post('/pessoas', PessoaController.criarPessoa)
  .post('pessoas/:idUsuario/matricula', PessoaController.criarMatricula)
  .put('/pessoas/:id', PessoaController.atualizarRegistro)
  .delete('/pessoas/:id', PessoaController.removerPessoa)

module.exports = router
