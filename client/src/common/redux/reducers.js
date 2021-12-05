import {
  GET_POKEMONS,
  GET_POKEMONS_BY_ID,
  GET_POKEMONS_BY_NAME,
  CLEAR_FILTER,
  GET_TYPES,
  FILTER,
  CLEAR_SEARCH,
  SORT,
  GET_POKEMON_DETAIL,
  POST_POKEMON,
} from "./actions";

const initialState = {
  allPokemons: [],
  pokemonsCopy: [],
  filter: false,
  types: [],
  pokemon: {},
  search: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POKEMONS: {
      return {
        ...state,
        allPokemons: payload,
        pokemonsCopy: payload,
      };
    }
    case GET_POKEMONS_BY_ID: {
      return {
        ...state,
        pokemon: payload,
      };
    }
    case GET_POKEMONS_BY_NAME: {
      return {
        ...state,
        pokemon: payload,
        search: true,
      };
    }
    case CLEAR_FILTER: {
      return {
        ...state,
        pokemonsCopy: state.allPokemons,
        filter: false,
      };
    }
    case CLEAR_SEARCH: {
      return {
        ...state,
        pokemon: {},
        search: false,
      };
    }
    case GET_TYPES: {
      return {
        ...state,
        types: payload,
      };
    }
    case FILTER: {
      // const pl = payload.length? payload: s;
      return {
        ...state,
        pokemonsCopy: payload,
        filter: true,
      };
    }
    case SORT: {
      // const pl = payload.length? payload: s;
      return {
        ...state,
        pokemonsCopy: payload,
      };
    }
    case GET_POKEMON_DETAIL: {
      // const pl = payload.length? payload: s;
      return {
        ...state,
        pokemon: payload,
      };
    }
    case POST_POKEMON: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
