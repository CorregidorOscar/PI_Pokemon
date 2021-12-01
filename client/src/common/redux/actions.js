import axios from "axios";
const API_URL = "http://localhost:3001";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONS_BY_ID = "GET_POKEMONS_BY_ID";
export const GET_POKEMONS_BY_NAME = "GET_POKEMONS_BY_NAME";
export const GET_TYPES = "GET_TYPES";
// export const ADD_POKEMON = "ADD_POKEMON";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const FILTER = "FILTER";
export const SORT = "SORT";

export const getAllPokemons = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/pokemons`).then((poke) => {
      console.log("allpoke", poke);
      dispatch({
        type: GET_POKEMONS,
        payload: poke.data,
      });
    });
  };
};
export const getTypes = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/types`).then((type) => {
      dispatch({
        type: GET_TYPES,
        payload: type.data,
      });
    });
  };
};
export const getPokemonByID = (id) => {
  return (dispatch) => {
    axios.get(`${API_URL}/pokemons/${id}`).then((poke) => {
      console.table("getid", poke.data);
      dispatch({
        type: GET_POKEMONS_BY_ID,
        payload: poke.data,
      });
    });
  };
};
export const getPokemonByName = (name) => {
  // if (name === "")
  //   return {
  //     type: GET_POKEMONS_BY_NAME,
  //     payload: { data: {}, searched: false },
  //   };
  return (dispatch) => {
    axios.get(`${API_URL}/pokemons?name=${name}`).then((poke) =>
      dispatch({
        type: GET_POKEMONS_BY_NAME,
        payload: poke.data,
      })
    );
  };
};
export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};
export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
  };
};

export const filter = (filter, pokes) => {
  // const pokemonsCopy = useSelector((store) => store.pokemonsCopy);
  // console.log("pokes", pokes);
  if (filter === "all") return clearFilter();
  let payload = pokes.filter((e) => e.types.includes(filter));
  // if (!payload.length) payload = pokes;
  return {
    type: FILTER,
    payload,
  };
};

export const sort = (compare, order, pokes) => {
  let payload = null;
  // console.log("compare", compare, pokes[0][compare]);
  switch (order) {
    case "asc": {
      payload = pokes.sort((a, b) =>
        a[compare].toString().localeCompare(b[compare].toString())
      );
      break;
    }
    case "desc": {
      payload = pokes.sort((a, b) =>
        b[compare].toString().localeCompare(a[compare].toString())
      );

      break;
    }
    default:
      payload = pokes;
  }
  return {
    type: SORT,
    payload,
  };
};
export const getPokemonDetail = (poke) => {
  return {
    type: GET_POKEMON_DETAIL,
    payload: poke,
  };
};
