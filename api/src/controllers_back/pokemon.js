const { Pokemon, Type } = require("../db");
const ModelCrud = require("./index");
const axios = require("axios");
const { URL_POKEMON } = require("../utils/constants");

class PokemonModel extends ModelCrud {
  constructor(model) {
    super(model);
  }
  getAllPokemons = (req, res, next) => {
    const { name } = req.query;
    if (name)
      return this.model
        .findOne({
          where: {
            name,
          },
        })
        .then((poke) => res.send(poke))
        .catch((error) => next(error));
    const dbPokemon = this.model.findAll({
      include: {
        model: Type,
      },
    });
    const apiPokemon = axios.get(URL_POKEMON);
    Promise.all([dbPokemon, apiPokemon])
      .then((result) => {
        const [dbPokemonInfo, apiPokemonInfo] = result;
        const resp = dbPokemonInfo.concat(apiPokemonInfo.data.results);
        console.log("poke", apiPokemonInfo.data.results);
        res.send(resp);
      })
      .catch((error) => next(error));
  };
}
const pokemonController = new PokemonModel(Pokemon);
console.log("2", pokemonController.model);

module.exports = pokemonController;

// const { v4: uuidv4 } = require("uuid");

// function getAllPokemons(req, res, next) {
//   Pokemon.findAll()
//     .then((poke) => res.send(poke))
//     .catch((error) => next(error));
// }
// function getByID(req, res, next) {
//   const { id } = req.params;
//   Pokemon.findByPk(id)
//     .then((poke) => res.send(poke))
//     .catch((error) => next(error));
// }
// function getByName(req, res, next) {
//   const { name } = req.params;
//   Pokemon.findOne({
//     where: {
//       name,
//     },
//   })
//     .then((poke) => res.send(poke))
//     .catch((error) => next(error));
// }
// function addPokemon(req, res, next) {
//   const poke = req.body;
//   Pokemon.findOrCreate({
//     where: { name: poke.name },
//     defaults: {
//       ...poke,
//       id: uuidv4(),
//     },
//   })
//     .then((poke, created) => res.send(poke))
//     .catch((error) => next(error));
// }
// function updatePokemon(req, res, next) {
//   const { id } = req.params;
//   const poke = req.body;
//   Pokemon.update(poke, {
//     where: {
//       id,
//     },
//   })
//     .then((poke) => res.send(poke))
//     .catch((error) => next(error));
// }
// function deletePokemon(req, res, next) {
//   const { id } = req.params;
//   Pokemon.destroy({
//     where: {
//       id,
//     },
//   })
//     .then(() => res.sendStatus(200))
//     .catch((error) => next(error));
// }

// module.exports = {
//   getAllPokemons,
//   getByID,
//   getByName,
//   addPokemon,
//   updatePokemon,
//   deletePokemon,
// };
