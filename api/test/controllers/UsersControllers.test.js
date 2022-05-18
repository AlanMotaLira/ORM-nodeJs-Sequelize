jest.mock('../../controllers/UsersControllers')
const UserController = require('../../controllers/UsersControllers')

describe('class UserController', () => {
  it('método consultAllUsers()', () => {
    UserController.consultAllUsers().then((item) => {
      expect(item[0].name).toBe('Ana Souza')
      expect(item[1].name).toBe('Marcos Cintra')
      expect(item[0].active).toBe(true)
      expect(item[1].active).toBe(false)
      expect(item.length).toBe(6)
    })
  })
  it('método consultSingleUser', () => {
    const test = [
      'ana@ana.com',
      'docente',
      '2022-05-16T18:18:33.000Z',
      false
    ]
    UserController.consultSingleUser(0).then((item) => {
      expect(item.email).toEqual(test[0])
    })
    UserController.consultSingleUser(5).then((item) => {
      expect(item.role).toEqual(test[1])
    })
    UserController.consultSingleUser(2).then((item) => {
      expect(item.updatedAt).toEqual(test[2])
    })
    UserController.consultSingleUser(1).then((item) => {
      expect(item.active).toEqual(test[3])
    })
  })
})
