// import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { getAllPokemons } from "../redux/actions";
import PokemonCard from "./PokemonCard";
export default function PokemonCards({ currentPokemons }) {
  // const pokemons = useSelector((store) => store.pokemonsCopy);
  const filter = useSelector((store) => store.filter);
  const search = useSelector((store) => store.search);
  const poke = useSelector((store) => store.pokemon);

  if (search && Object.entries(poke).length)
    return <PokemonCard key={poke.id} {...poke} />;
  if (search && !Object.entries(poke).length)
    return <h3>No matches for the search</h3>;
  if (filter && !currentPokemons.length)
    return <h3>No matches for filtering</h3>;

  // //si enconttro pokemon

  // //si no encontro pokemon
  // //si hay filtro
  // if (filter) return ret;
  return (
    <div>
      {currentPokemons.length ? (
        currentPokemons.map((e) => <PokemonCard key={e.id} {...e} />)
      ) : (
        <img
          src="https://c.tenor.com/gR9Yv1teCDgAAAAj/pokemon-furret.gif"
          alt="loading"
        ></img>
      )}
      {/* <h1>PokemonCards</h1> */}
    </div>
  );
}
