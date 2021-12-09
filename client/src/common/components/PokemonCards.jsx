// import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { getAllPokemons } from "../redux/actions";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

export default function PokemonCards({ currentPokemons }) {
  // const pokemons = useSelector((store) => store.pokemonsCopy);
  const filter = useSelector((store) => store.filter);
  const search = useSelector((store) => store.search);
  const poke = useSelector((store) => store.pokemon);

  if (search && Object.entries(poke).length)
    return (
      <ContainerCards className="change">
        <PokemonCard key={poke.id} {...poke} />
      </ContainerCards>
    );
  if (search && !Object.entries(poke).length)
    return (
      <ContainerCards className="change">
        <CardContainer>
          <img
            // src="https://c.tenor.com/qR1r4o0t-DQAAAAi/pika-omg.gif"
            src="https://c.tenor.com/6GYLcQPTRHgAAAAi/bulbizarre-bulbasaur.gif"
            alt="404"
          />
          <h1>No matches for the search</h1>
        </CardContainer>
      </ContainerCards>
    );
  if (filter && !currentPokemons.length)
    return (
      <ContainerCards className="change">
        <CardContainer>
          <img
            // src="https://c.tenor.com/qR1r4o0t-DQAAAAi/pika-omg.gif"
            src="https://c.tenor.com/6GYLcQPTRHgAAAAi/bulbizarre-bulbasaur.gif"
            alt="404"
          />
          <h1>No matches for filtering</h1>
        </CardContainer>
      </ContainerCards>
    );

  // //si enconttro pokemon

  // //si no encontro pokemon
  // //si hay filtro
  // if (filter) return ret;

  return (
    <>
      {currentPokemons.length ? (
        <ContainerCards>
          {currentPokemons.map((e) => (
            <PokemonCard key={e.id} {...e} />
          ))}
        </ContainerCards>
      ) : (
        <ContainerCards className="change">
          <CardContainer>
            <img
              src="https://c.tenor.com/gR9Yv1teCDgAAAAj/pokemon-furret.gif"
              alt="loading"
            ></img>
            <h1>Loading...</h1>
          </CardContainer>
        </ContainerCards>
      )}
      {/* <h1>PokemonCards</h1> */}
    </>
  );
}
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
  &.change {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--colors-secondary);
  font-size: 1rem;
  text-shadow: var(--colors-black) 0.1em 0.1em 0.2em;
`;
