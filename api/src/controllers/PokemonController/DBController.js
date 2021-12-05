// const { FindOptions, Op } = require("sequelize");
const { Pokemon, Type } = require("../../db");
const { v4: uuidv4 } = require("uuid");

class DBController {
  //   constructor(model) {
  //     this.model = model;
  //   }
  static getAllPokemons() {
    return Pokemon.findAll({
      include: {
        model: Type,
      },
    });
  }
  static async getByName(name) {
    return Pokemon.findOne({
      where: {
        name,
      },
    });
  }
  static async getByID(id) {
    return Pokemon.findByPk(id);
  }
  // static async add(poke) {
  //   return Pokemon.findOrCreate({
  //     where: { name: poke.name },
  //     defaults: {
  //       ...poke,
  //       id: uuidv4(),
  //     },
  //   });
  // }
  static async add(poke) {
    return Pokemon.findOrCreate({
      where: { name: poke.name },
      defaults: {
        ...poke,
        id: uuidv4(),
      },
    });
  }
  static async delete(id) {
    return Pokemon.destroy({
      where: {
        id,
      },
    });
  }
}

// const DBController = new DBControllerClass(Pokemon);
module.exports = DBController;
