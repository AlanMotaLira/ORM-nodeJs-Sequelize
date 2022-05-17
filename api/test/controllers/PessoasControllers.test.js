jest.mock('../../controllers/PessoasControllers')
const PessoaController = require('../../controllers/PessoasControllers')

describe('class PessoaController', () => {
  it('método pegaTodasAsPessoas()', () => {
    PessoaController.pegaTodasAsPessoas().then((item) => {
      expect(item[0].nome).toBe('Ana Souza')
      expect(item[1].nome).toBe('Marcos Cintra')
      expect(item[0].ativo).toBe(true)
      expect(item[1].ativo).toBe(false)
      expect(item.length).toBe(6)
    })
  })
  it('método pegaUmaPessoa', () => {
    const test = [
      'ana@ana.com',
      'docente',
      '2022-05-16T18:18:33.000Z',
      false
    ]
    PessoaController.pegaUmaPessoa(0).then((item) => {
      expect(item.email).toEqual(test[0])
    })
    PessoaController.pegaUmaPessoa(5).then((item) => {
      expect(item.role).toEqual(test[1])
    })
    PessoaController.pegaUmaPessoa(2).then((item) => {
      expect(item.updatedAt).toEqual(test[2])
    })
    PessoaController.pegaUmaPessoa(1).then((item) => {
      expect(item.ativo).toEqual(test[3])
    })
  })
})
