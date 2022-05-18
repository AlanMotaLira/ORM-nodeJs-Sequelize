const dataBase = require('../models')

class Services {
  constructor (modelName) {
    this.modelName = modelName
  }

  async consultRegistration (where = {}, attributes = '', include = '') {
    return dataBase[this.modelName].findAll({
      where: { ...where },
      attributes,
      include
    })
  }

  async consultSingleRegistration (where = {}) {
    return dataBase[this.modelName].findOne({ where: { ...where } })
  }

  async createRecord (data, transaction = {}) {
    return dataBase[this.modelName].create(data, transaction)
  }

  async updateRegister (dadosAtualizados, id, transaction = {}) {
    return dataBase[this.modelName].update(
      dadosAtualizados,
      {
        where: { id: Number(id) }
      },
      transaction
    )
  }

  async removeRecord (id) {
    return dataBase[this.modelName].destroy({ where: { id: Number(id) } })
  }

  async restoreRecord (id) {
    return dataBase[this.modelName].restore({ where: { id: Number(id) } })
  }
}

module.exports = Services
