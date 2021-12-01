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
    if (id.length > 5)
      return DBController.getByID(id)
        .then((r) => res.send(r))
        .catch((error) => next(error));
    return APIController.getByID(id)
      .then((r) => res.send(r))
      .catch((error) => next(error));
  }

  static async add(req, res, next) {
    const poke = req.body;
    return DBController.add(poke)
      .then((poke, created) => {
        // console.log("db", poke);
        return res.send(poke[1]);
      })

      .catch((error) => next(error));
  }
}

async function getByName(name) {
  return Promise.all([
    DBController.getByName(name),
    APIController.getByName(name),
  ]).then((poke) => {
    console.log("poke", poke);
    if (typeof poke[1] === "object") return poke[1];
    return poke[0];
  });
}

async function getAll() {
  // const [db, api] = await Promise.all([
  //   DBController.getAllPokemons(),
  //   APIController.getAllPokemons(),
  // ]);
  // const poke = [...db, ...api];
  // console.log("get", poke);
  // return poke;
  // const db = DBController.getAllPokemons();
  // // console.log("pokecont", db);
  // const api = APIController.getAllPokemons();
  // // console.log("pokecont", api);
  return Promise.all([
    DBController.getAllPokemons(),
    APIController.getAllPokemons(),
  ]).then((result) => {
    // console.log("poke", result);

    const [dbInfo, apiInfo] = result;
    const resp = dbInfo.concat(apiInfo);
    // console.log("poke", resp);
    return resp;
  });
}
// getAll();
// const PokemonController = new PokemonControllerClass();
module.exports = PokemonController;
