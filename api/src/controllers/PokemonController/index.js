const APIController = require("./APIController");
const DBController = require("./DBController");

class PokemonController {
  static async getAllPokemons(req, res, next) {
    const { name } = req.query;
    if (name) {
      return getByName(name)
        .then((r) => res.send(r))
        .catch((e) => next(e));
      //   return APIController.getByName(name)
      //     .then(
      //       (r) => {
      //         //   console.log("name", r);
      //         return res.send(r);
      //       },
      //       (rej) => {
      //         console.log("rej");
      //         return DBController.getByName(name);
      //       }
      //     )
      //     .then((r) => {
      //       console.log("name", r);
      //       return res.send(r);
      //     })
      //     .catch((e) => next(e));
      // .catch((e) => DBController.getByName(name))
      // .then((r) => res.send(r))
      // .catch((e) => next(e));
    }
    return getAll()
      .then((r) => res.send(r))
      .catch((e) => next(e));
    // const db = await DBController.getAllPokemons();
    // console.log("db", db);
    // const api = await APIController.getAllPokemons();
    // console.log("api", api);
    // const poke = [...db, ...api];
    // res.send(poke);

    // return APIController.getAllPokemons()
    //   .then((r) => res.send(r))
    //   .catch((e) => next(e));

    // const [apiPokes, dbPokes] = await Promise.all([
    //   APIController.getAllPokemons(),
    //   DBController.getAllPokemons(),
    // ]);
    // const allPokemons = [...dbPokes, ...apiPokes];
    // return allPokemons;
    // return APIController.getAllPokemons()
    //   .then((r) => res.send(r))
    //   .catch((e) => next(e));

    // return Promise.all([APIController.getAllPokemons()])
    //   .then((result) => {
    //     // console.log("poke", result);

    //     const [apiInfo, dbInfo] = result;
    //     const resp = apiInfo.concat(dbInfo);
    //     // console.log("poke", resp);
    //     res.send(resp);
    //   })
    //   .catch((error) => next(error));
  }

  static async getByID(req, res, next) {
    const { id } = req.params;
    if (id.length > 7)
      return DBController.getByID(id)
        .then((r) => res.send(r))
        .catch((error) => next(error));
    return APIController.getByID(id)
      .then((r) => res.send(r))
      .catch((error) => next(error));
  }

  static async add(req, res, next) {
    const pokemon = req.body;
    return DBController.add(pokemon)
      .then((poke) => {
        // console.log("db", poke);

        pokemon.types.forEach((e) => {
          poke[0].addType(e);
        });
        // return poke[0].addType(1);
        return res.send(poke[1]);
      })

      .catch((error) => next(error));
  }

  static async delete(req, res, next) {
    const { id } = req.params;
    DBController.delete(id)
      .then(() => res.send(true))
      .catch((error) => next(error));
  }
}

async function getByName(name) {
  return Promise.all([
    DBController.getByName(name),
    APIController.getByName(name),
  ])
    .then((poke) => {
      if (typeof poke[1] === "object") return poke[1];
      return poke[0];
    })
    .catch((error) => next(error));
}

async function getAll() {
  return Promise.all([
    DBController.getAllPokemons(),
    APIController.getAllPokemons(),
  ]).then((result) => {
    const [dbInfo, apiInfo] = result;
    const resp = dbInfo.concat(apiInfo);
    return resp;
  });
}
// getAll();
// const PokemonController = new PokemonControllerClass();
module.exports = PokemonController;
