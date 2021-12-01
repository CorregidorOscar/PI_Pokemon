const { Type } = require("../db");
const ModelCrud = require("./index");

const typeController = new ModelCrud(Type);
console.log("2", typeController.model);

module.exports = typeController;
