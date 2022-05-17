const dataModel = [
  {
    id: 1,
    nome: 'Ana Souza',
    ativo: true,
    email: 'ana@ana.com',
    role: 'estudante',
    createdAt: '2022-05-16T18:18:33.000Z',
    updatedAt: '2022-05-16T18:18:33.000Z'
  },
  {
    id: 2,
    nome: 'Marcos Cintra',
    ativo: false,
    email: 'marcos@marcos.com',
    role: 'estudante',
    createdAt: '2022-05-16T18:18:33.000Z',
    updatedAt: '2022-05-16T18:18:33.000Z'
  },
  {
    id: 3,
    nome: 'Felipe Cardoso',
    ativo: true,
    email: 'felipe@felipe.com',
    role: 'estudante',
    createdAt: '2022-05-16T18:18:33.000Z',
    updatedAt: '2022-05-16T18:18:33.000Z'
  },
  {
    id: 4,
    nome: 'Sandra Gomes',
    ativo: false,
    email: 'sandra@sandra.com',
    role: 'estudante',
    createdAt: '2022-05-16T18:18:33.000Z',
    updatedAt: '2022-05-16T18:18:33.000Z'
  },
  {
    id: 5,
    nome: 'Paula Morais',
    ativo: true,
    email: 'paula@paula.com',
    role: 'docente',
    createdAt: '2022-05-16T18:18:33.000Z',
    updatedAt: '2022-05-16T18:18:33.000Z'
  },
  {
    id: 6,
    nome: 'Sergio Lopes',
    ativo: true,
    email: 'sergio@sergio.com',
    role: 'docente',
    createdAt: '2022-05-16T18:18:33.000Z',
    updatedAt: '2022-05-16T18:18:33.000Z'
  }
]

class PessoaController {
  static async pegaTodasAsPessoas (req, res) {
    return dataModel
  }

  static async pegaUmaPessoa (req, res) {
    return dataModel[req]
  }

  static async criarPessoa (req, res) {
    return {
      id: 1,
      nome: 'Ana Souza',
      ativo: true,
      email: 'ana@ana.com',
      role: 'estudante',
      createdAt: '2022-05-16T18:18:33.000Z',
      updatedAt: '2022-05-16T18:18:33.000Z'
    }
  }

  static async atualizarRegistro (req, res) {}

  static async removerPessoa (req, res) {
    return res.state(200).json({ mensagem: 'O usuario foi removido' })
  }

  static async pegaUmaMatricula (req, res) {}

  static async criarMatricula (req, res) {}
}

module.exports = PessoaController
