const {Router} = require('express')
const PessoaController = require('../controllers/PessoasControllers')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id',PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criarPessoa)
router.put('/pessoas/:id', PessoaController.atualizarRegistro)
router.delete('/pessoas/:id', PessoaController.removerPessoa)

module.exports = router