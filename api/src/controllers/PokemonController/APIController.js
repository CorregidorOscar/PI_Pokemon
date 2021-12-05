const axios = require("axios");
const { URL_POKEMON } = require("../../utils/constants");
class APIController {
  static async getAllPokemons() {
    // try {
    // const arr = axios.get(`${URL_POKEMON}?offset=0&limit=40`).then((r) => {
    //   const pokes = r.data.results;
    //   console.log(pokes);
    //   return pokes.map((e) => axios.get(e.url));
    // });
    // console.log("arr", arr);
    // return Promise.all(arr).then((r) => {
    //   console.log("arr", r);
    //   return r.map((e) => createPokemon(e.data));
    // });

    const arr1 = Array(36)
      .fill()
      .map((_, i) => axios.get(`${URL_POKEMON}/${i + 1}`));
    return Promise.all(arr1).then((res) => {
      return res.map((e) => createPokemon(e.data));
    });

    // const arr = [];
    // const arr1 = Array(15)
    //   .fill()
    //   .map((_, i) => axios.get(`${URL_POKEMON}/${i + 1}`));
    // const arr2 = Array(15)
    //   .fill()
    //   .map((_, i) => axios.get(`${URL_POKEMON}/${i + 16}`));
    // // const arr3 = Array(10)
    // //   .fill()
    // //   .map((_, i) => axios.get(`${URL_POKEMON}/${i + 31}`));
    // // console.log("arr", arr, arr2, arr3);
    // const pro1 = Promise.all(arr1).then((res) => {
    //   return res.map((e) => createPokemon(e.data));
    // });
    // const pro2 = Promise.all(arr2).then((res) => {
    //   return res.map((e) => createPokemon(e.data));
    // });
    // // const pro3 = Promise.all(arr3).then((res) => {
    // //   return res.map((e) => createPokemon(e.data));
    // // });
    // return Promise.all([pro1, pro2]).then((res) => {
    //   return [...res[0], ...res[1]];
    // });

    // console.log("pro", arr);
    // return arr;
    // .catch((err) => err);
    // } catch (err) {
    //   console.log("error in getAllAPiPokemons");
    //   return [];
    // }
  }

  static async getByName(name) {
    return (
      axios
        .get(`${URL_POKEMON}/${name}`)
        // .then((r) => r.data)
        .then((e) => createPokemon(e.data))
        .catch((e) => e.message)
    );
  }

  static async getByID(id) {
    return (
      axios
        .get(`${URL_POKEMON}/${id}`)
        // .then((r) => r.data)
        .then((e) => createPokemon(e.data))
    );
  }
}
function createPokemon(e) {
  // const sprite = axios
  //   .get(`https://www.professorlotus.com/Sprites/${e.name}.gif`)
  //   .then((r) => {
  //     // console.log("sprite", r);
  //     return r;
  //   });
  // console.log("sprite", sprite);
  return {
    id: e.id,
    name: e.name,
    hp: e.stats[0].base_stat,
    attack: e.stats[1].base_stat,
    defense: e.stats[2].base_stat,
    speed: e.stats[5].base_stat,
    height: e.height,
    weight: e.weight,
    types: e.types.map((e) => e.type.name),
    sprite: `https://www.professorlotus.com/Sprites/${e.name}.gif`,
    // sprite: e.sprites.other.home.front_default,
  };
}
// const APIController = new APIControllerClass();
module.exports = APIController;
