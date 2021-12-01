const APIController = require("./APIController");
const DBController = require("./DBController");

class TypeController {
  static async getAllTypes(req, res, next) {
    const db = await DBController.getAllTypes();
    // console.log("types", db[0].dataValues);
    return res.send(db);
  }

  static async syncTypes() {
    APIController.getAllTypes().then((r) => {
      //   console.log("sync", r);
      r.map((e) => DBController.add(e));
    });
  }
}

module.exports = TypeController;
