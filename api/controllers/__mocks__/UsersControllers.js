const dataModel = [
  {
    id: 1,
    name: 'Ana Souza',
    active: true,
    email: 'ana@ana.com',
    role: 'estudante',
    createdAt: '2022-05-16T18:18:33.000Z',
    updatedAt: '2022-05-16T18:18:33.000Z'
  },
  {
    id: 2,
    name: 'Marcos Cintra',
    active: false,
    email: 'marcos@marcos.com',
    role: 'estudante',
    createdAt: '2022-05-16T18:18:33.000Z',
    updatedAt: '2022-05-16T18:18:33.000Z'
  },
  {
    id: 3,
    name: 'Felipe Cardoso',
    active: true,
    email: 'felipe@felipe.com',
    role: 'estudante',
    createdAt: '2022-05-16T18:18:33.000Z',
    updatedAt: '2022-05-16T18:18:33.000Z'
  },
  {
    id: 4,
    name: 'Sandra Gomes',
    active: false,
    email: 'sandra@sandra.com',
    role: 'estudante',
    createdAt: '2022-05-16T18:18:33.000Z',
    updatedAt: '2022-05-16T18:18:33.000Z'
  },
  {
    id: 5,
    name: 'Paula Morais',
    active: true,
    email: 'paula@paula.com',
    role: 'docente',
    createdAt: '2022-05-16T18:18:33.000Z',
    updatedAt: '2022-05-16T18:18:33.000Z'
  },
  {
    id: 6,
    name: 'Sergio Lopes',
    active: true,
    email: 'sergio@sergio.com',
    role: 'docente',
    createdAt: '2022-05-16T18:18:33.000Z',
    updatedAt: '2022-05-16T18:18:33.000Z'
  }
]

class UserController {
  static async consultAllUsers (req, res) {
    return dataModel
  }

  static async consultSingleUser (req, res) {
    return dataModel[req]
  }

  static async registerUser (req, res) {
    return {
      id: 1,
      name: 'Ana Souza',
      active: true,
      email: 'ana@ana.com',
      role: 'estudante',
      createdAt: '2022-05-16T18:18:33.000Z',
      updatedAt: '2022-05-16T18:18:33.000Z'
    }
  }

  static async updateUser (req, res) {}

  static async removeUser (req, res) {
    return res.state(200).json({ mensagem: 'O usuario foi removido' })
  }

  static async returnUnicaEnrollment (req, res) {}

  static async createEnrollment (req, res) {}
}

module.exports = UserController
