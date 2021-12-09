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
export const POST_POKEMON = "POST_POKEMON";
export const CLEAR_ALL = "CLEAR_ALL";

export const SAVE_SEARCH = "SAVE_SEARCH";
export const SAVE_FILTER = "SAVE_FILTER";
export const SAVE_SORT = "SAVE_SORT";

export const getAllPokemons = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/pokemons`).then((poke) => {
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
  if (filter === "all") return clearFilter();
  let payload = pokes.filter((e) => e.types.find((t) => t.name === filter));
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
      if (compare === "name") {
        payload = pokes.sort((a, b) => a[compare].localeCompare(b[compare]));
        break;
      }
      payload = pokes.sort((a, b) => {
        if (a[compare] > b[compare]) {
          return 1;
        }
        if (a[compare] < b[compare]) {
          return -1;
        }
        return 0;
      });
      break;
    }
    case "desc": {
      if (compare === "name") {
        payload = pokes.sort((a, b) => b[compare].localeCompare(a[compare]));
        break;
      }
      payload = pokes.sort((a, b) => {
        if (a[compare] < b[compare]) {
          return 1;
        }
        if (a[compare] > b[compare]) {
          return -1;
        }
        return 0;
      });
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
export const postPokemon = (pokemon) => {
  return (dispatch) => {
    axios.post(`${API_URL}/pokemons`, pokemon).then((poke) => poke);
  };
};
export const clearAll = () => {
  return {
    type: CLEAR_ALL,
  };
};

export const saveSearch = (input) => {
  return {
    type: SAVE_SEARCH,
    payload: input,
  };
};
export const saveSort = (input) => {
  return {
    type: SAVE_SORT,
    payload: input,
  };
};
export const saveFilter = (input) => {
  return {
    type: SAVE_FILTER,
    payload: input,
  };
};
