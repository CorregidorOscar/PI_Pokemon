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
import bg1 from "../assets/background/1.jpeg";
import bg2 from "../assets/background/2.jpeg";
import bg3 from "../assets/background/3.jpeg";
import bg4 from "../assets/background/4.jpeg";

export default function Pokemons() {
  const pokemons = useSelector((store) => store.pokemonsCopy);
  const [num, setNum] = useState(1);

  // const dispatch = useDispatch();
  // function tick() {
  //   setNum((prevTime) => (prevTime === 4 ? 1 : prevTime + 1));
  // }
  useEffect(() => {
    // dispatch(getAllPokemons());
    // const timer = setInterval(tick, 4000);
    // return () => clearInterval(timer);
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
    // <Background num={num}>
    <PokemonContainer num={num}>
      <Pokedex />

      <CPContainer>
        <PokemonCards currentPokemons={currentPokemons} />
        {/* <img src="https://www.professorlotus.com/Sprites/Pikachu.gif" alt="img" /> */}
        <Paged
          amountPerPage={amountPerPage}
          total={pokemons.length}
          paged={paged}
          currentPage={currentPage}
        />
      </CPContainer>
      {/*<img
        src="https://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu.gif"
        alt="img"
      /> */}
    </PokemonContainer>
    /* </Background> */
  );
}
const fade = keyframes`
  0%, 10%{
    /* opacity: 0.25; */
    /* background-color:rgba(245, 230, 83,1) */
    background-image: url(${bg1})
    /* transition: -5% */
    /* background:rgba(0,0,0,0.2); */
    /* transform: scale(2, 2); */
  }
  /* 20% {
    /* opacity: 0.25; */
    /* background-image: url(${
      require(`../assets/background/1.jpeg`).default
    }) */
    /* background:rgba(0,0,0,0.2); */
    /* transform: scale(2, 2); */
  //} */
  15%,35% {
    /* backgorund-color:rgba(144, 201, 189,1) */
    background-image: url(${bg2})

    /* background:rgba(0,0,0,0); */
    /* transform: scale(1, 1); */
  }
  /* 45% {
    background-image: url(${require(`../assets/background/2.jpeg`).default})

    background:rgba(0,0,0,0);
    /* transform: scale(1, 1); */
  //} */
  40%,60% {
/* background-color: rgba(255, 147, 65,1) */
    background-image: url(${bg3})

    /* background:rgba(0,0,0,0); */
    /* transform: scale(1, 1); */
  }
  /* 70% {
    background-image: url(${require(`../assets/background/3.jpeg`).default})

    /* background:rgba(0,0,0,0); */
    /* transform: scale(1, 1); */
  //} */
  65%, 85%{
    /* background-color: #8fe2ec */

    background-image: url(${bg4})

    /* background:rgba(0,0,0,0.2); */
    /* transform: scale(2, 2); */
  }
  /* 95% {
    background-image: url(${require(`../assets/background/4.jpeg`).default})

    /* background:rgba(0,0,0,0.2); */
    /* transform: scale(2, 2); */
  //} */
  90%, 100%{
    /* background-color:rgba(245, 230, 83,1) */
    background-image: url(${bg1})

    /* background-image: url(${
      require(`../assets/background/1.jpeg`).default
    }) */
  }
`;
const back = keyframes`
  0%{
    background-color:rgba(245, 230, 83,1))

   
  }
 
  25% {
        backgorund-color:rgba(144, 201, 189,1)



  }
  50% {
    background-color: rgba(255, 147, 65,1)

  }
  75%{
        background-color: rgba(139, 198, 206,1)
  }
  100%{
    background-color:rgba(245, 230, 83,1))
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
  /* background: ${(props) =>
    `url(${require(`../assets/background/${props.num}.jpeg`).default})`}; */
  /* animation: ${fade} 16s infinite; */
`;
const Background = styled.div`
  /* position: relative; */
  height: 100vh;
  width: 100vw;
  /* background-color: ${(props) => {
    if (props.num === 1) return "rgba(245, 230, 83,0.2)";
    if (props.num === 2) return "rgba(144, 201, 189,0.2)";
    if (props.num === 3) return "rgba(255, 147, 65,0.2)";
    if (props.num === 4) return "rgba(139, 198, 206,0.2)";
  }};
  background: ${(props) =>
    `url(${require(`../assets/background/${props.num}.jpeg`).default})`}; */

  animation: ${back} 16s infinite;

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
