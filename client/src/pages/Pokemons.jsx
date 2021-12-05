// import SearchBar from "../common/components/SearchBar";
import PokemonCards from "../common/components/PokemonCards";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../common/redux/actions";
// import Filter from "../common/components/Filter";
// import Sort from "../common/components/Sort";
import Paged from "../common/components/Paged";
import { useState, useEffect } from "react";
// import PokemonCard from "../common/components/PokemonCard";
import { Link } from "react-router-dom";
import Pokedex from "../common/components/Pokedex";
import styled, { keyframes } from "styled-components";
import img1 from "../assets/background/1.jpeg";
const fade = keyframes`
  0% {
    /* opacity: 0.25; */
    background:rgba(0,0,0,0.2);
    /* transform: scale(2, 2); */
  }
  25% {
    background:rgba(0,0,0,0);
    /* transform: scale(1, 1); */
  }
  75% {
    background:rgba(0,0,0,0);
    /* transform: scale(1, 1); */
  }
  100% {
    background:rgba(0,0,0,0.2);
    /* transform: scale(2, 2); */
  }
`;
const scale = keyframes`
0% {
    transform: scale(2, 2);
  }
  25% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(2, 2);
  }
`;
const PokemonContainer = styled.div`
  /* position: absolute; */
  display: flex;
  /* top: 0;
  left: 0;
  bottom: 0;
  right: 0; */
  height: 100vh;
  width: 100vw;
  /* background: url(${img1});*/
  /* background: ${(props) =>
    `url(${require(`../assets/background/${props.num}.jpeg`).default})`}; */
  animation: ${fade} 4s infinite;
`;
const Background = styled.div`
  /* position: relative; */
  height: 100vh;
  width: 100vw;
  background: ${(props) =>
    `url(${require(`../assets/background/${props.num}.jpeg`).default})`};
  /* animation: ${scale} 4s infinite; */

  /* background: url(${(props) => props.image}); */
  /* opacity: 0;
  transition: opacity 1s; */
`;
const CPContainer = styled.div`
  /* display: flex; */
  height: 100vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
export default function Pokemons() {
  const pokemons = useSelector((store) => store.pokemonsCopy);
  const [num, setNum] = useState(1);

  const dispatch = useDispatch();
  function tick() {
    console.log(num);
    setNum((prevTime) => (prevTime === 4 ? 1 : prevTime + 1));
  }
  useEffect(() => {
    // dispatch(getAllPokemons());

    const timer = setInterval(tick, 4000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const amountPerPage = 12;
  const indexLastPokemon = currentPage * amountPerPage;
  const indexFirstPokemon = indexLastPokemon - amountPerPage;
  const currentPokemons = pokemons.slice(indexFirstPokemon, indexLastPokemon);

  const paged = (num) => {
    // console.log("num", num);
    setCurrentPage(num);
  };

  return (
    <Background num={num}>
      <PokemonContainer num={num}>
        <Pokedex />

        <CPContainer>
          <PokemonCards currentPokemons={currentPokemons} />
          {/* <img src="https://www.professorlotus.com/Sprites/Pikachu.gif" alt="img" /> */}
          <Paged
            amountPerPage={amountPerPage}
            total={pokemons.length}
            paged={paged}
          />
        </CPContainer>
        {/*<img
        src="https://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu.gif"
        alt="img"
      /> */}
      </PokemonContainer>
    </Background>
  );
}
