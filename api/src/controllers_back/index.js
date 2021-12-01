const { v4: uuidv4 } = require("uuid");

class ModelCrud {
  constructor(model) {
    this.model = model;
  }
  /**
   *@param {req} String
   */
  getAll = (req, res, next) => {
    // const { name } = req.query;
    // if (name)
    //   return this.model
    //     .findOne({
    //       where: {
    //         name,
    //       },
    //     })
    //     .then((poke) => res.send(poke))
    //     .catch((error) => next(error));
    this.model
      .findAll()
      .then((poke) => res.send(poke))
      .catch((error) => next(error));
  };

  getByID = (req, res, next) => {
    const { id } = req.params;
    this.model
      .findByPk(id)
      .then((poke) => res.send(poke))
      .catch((error) => next(error));
  };

  getByName = (req, res, next) => {
    const { name } = req.params;
    this.model
      .findOne({
        where: {
          name,
        },
      })
      .then((poke) => res.send(poke))
      .catch((error) => next(error));
  };

  add = (req, res, next) => {
    const body = req.body;
    this.model
      .findOrCreate({
        where: { name: body.name },
        defaults: {
          ...body,
          id: uuidv4(),
        },
      })
      .then((poke, created) => res.send(poke))
      .catch((error) => next(error));
  };

  update = (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    this.model
      .update(body, {
        where: {
          id,
        },
      })
      .then((poke) => res.send(poke))
      .catch((error) => next(error));
  };

  delete = (req, res, next) => {
    const { id } = req.params;
    this.model
      .destroy({
        where: {
          id,
        },
      })
      .then(() => res.sendStatus(200))
      .catch((error) => next(error));
  };
}

module.exports = ModelCrud;
