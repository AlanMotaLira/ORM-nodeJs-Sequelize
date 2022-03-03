const {Router} = require('express')
const PessoaController = require('../controllers/PessoasControllers')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)

module.exports = router