// import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { getAllPokemons } from "../redux/actions";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
const ContainerCards = styled.div`
  /* width: 80vw; */
  height: 100%;
  width: 100%;
  display: grid;
  /* background-color: var(--colors-secondary); */
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  padding: 1rem;
  /* grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); */
  /* grid-template-rows: repeat(auto-fill, minmax(200px, 1fr)); */

  /* padding: 10px 80px 50px; */
  /* grid-gap: 30px 30px; */
  justify-content: center;
`;
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
    <ContainerCards>
      {currentPokemons.length ? (
        currentPokemons.map((e) => <PokemonCard key={e.id} {...e} />)
      ) : (
        <img
          src="https://c.tenor.com/gR9Yv1teCDgAAAAj/pokemon-furret.gif"
          alt="loading"
        ></img>
      )}
      {/* <h1>PokemonCards</h1> */}
    </ContainerCards>
  );
}
