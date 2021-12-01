const { Type } = require("../../db");
// const { v4: uuidv4 } = require("uuid");

class DBController {
  static async getAllTypes() {
    return Type.findAll();
  }
  static async getByName(name) {
    return Type.findOne({
      where: {
        name,
      },
    });
  }
  static async getByID(id) {
    return Type.findByPk(id);
  }
  static async add(type) {
    return Type.findOrCreate({
      where: { name: type.name },
      defaults: {
        ...type,
      },
    });
  }
}

module.exports = DBController;
