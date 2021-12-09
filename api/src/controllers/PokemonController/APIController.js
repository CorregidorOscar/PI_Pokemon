const axios = require("axios");
const { URL_POKEMON } = require("../../utils/constants");
const DBController = require("../TypeController/DBController");
class APIController {
  static async getAllPokemons() {
    // let types = await DBController.getAllTypes();
    // types = types.map((e) => e.dataValues);
    const types = await getTypes();
    console.log("types", types);
    const arr1 = Array(36)
      .fill()
      .map((_, i) => axios.get(`${URL_POKEMON}/${i + 1}`));
    return Promise.all(arr1).then((res) => {
      return res.map((e) => createPokemon(e.data, types));
    });
  }

  static async getByName(name) {
    const types = await getTypes();
    return (
      axios
        .get(`${URL_POKEMON}/${name}`)
        // .then((r) => r.data)
        .then((e) => createPokemon(e.data, types))
        .catch((e) => e.message)
    );
  }

  static async getByID(id) {
    const types = await getTypes();
    return (
      axios
        .get(`${URL_POKEMON}/${id}`)
        // .then((r) => r.data)
        .then((e) => createPokemon(e.data, types))
    );
  }
}
function createPokemon(e, types) {
  // const sprite = axios
  //   .get(`https://www.professorlotus.com/Sprites/${e.name}.gif`)
  //   .then((r) => {
  //     // console.log("sprite", r);
  //     return r;
  //   });
  // console.log("sprite", sprite);
  // let id = await DBController.getByName(e.type.name);
  // id = id.dataValues.id;
  // .then((r) => {
  //   console.log("api", r.dataValues.id);
  //   return r.dataValues.id;
  // })
  return {
    id: e.id,
    name: e.name,
    hp: e.stats[0].base_stat,
    attack: e.stats[1].base_stat,
    defense: e.stats[2].base_stat,
    speed: e.stats[5].base_stat,
    height: e.height,
    weight: e.weight,
    types: e.types.map(
      // (e) => e.type.name
      (e) => ({
        name: e.type.name,
        id: types.find((t) => t.name === e.type.name).id,
      })
    ),
    sprite: `https://www.professorlotus.com/Sprites/${e.name}.gif`,
    // sprite: e.sprites.other.home.front_default,
  };
}
function getTypes() {
  // const types = await DBController.getAllTypes();
  // return types.map((e) => e.dataValues);
  return DBController.getAllTypes().then((t) => t.map((e) => e.dataValues));
}
// const APIController = new APIControllerClass();
module.exports = APIController;
