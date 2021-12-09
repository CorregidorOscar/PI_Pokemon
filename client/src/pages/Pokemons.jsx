// import SearchBar from "../common/components/SearchBar";
import PokemonCards from "../common/components/PokemonCards";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { getAllPokemons } from "../common/redux/actions";
// import Filter from "../common/components/Filter";
// import Sort from "../common/components/Sort";
import Paged from "../common/components/Paged";
import { useState, useEffect } from "react";
// import PokemonCard from "../common/components/PokemonCard";
import Pokedex from "../common/components/Pokedex";
import styled from "styled-components";

export default function Pokemons() {
  const pokemons = useSelector((store) => store.pokemonsCopy);
  // const [num, setNum] = useState(1);

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
    <PokemonContainer>
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

const PokemonContainer = styled.div`
  /* position: absolute; */
  display: flex;
  /* top: 0;
  left: 0;
  bottom: 0;
  right: 0; */
  height: 100vh;
  width: 100vw;
`;
// const Background = styled.div`
//   /* position: relative; */
//   height: 100vh;
//   width: 100vw;
//   /* background-color: ${(props) => {
//     if (props.num === 1) return "rgba(245, 230, 83,0.2)";
//     if (props.num === 2) return "rgba(144, 201, 189,0.2)";
//     if (props.num === 3) return "rgba(255, 147, 65,0.2)";
//     if (props.num === 4) return "rgba(139, 198, 206,0.2)";
//   }};
//   background: ${(props) =>
//     `url(${require(`../assets/background/${props.num}.jpeg`).default})`}; */

//   animation: ${back} 16s infinite;

//   /* background: url(${(props) => props.image}); */
//   /* opacity: 0;
//   transition: opacity 1s; */
// `;
const CPContainer = styled.div`
  /* display: flex; */
  height: 100vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
