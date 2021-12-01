import SearchBar from "../common/components/SearchBar";
import PokemonCards from "../common/components/PokemonCards";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../common/redux/actions";
import Filter from "../common/components/Filter";
import Sort from "../common/components/Sort";
import Paged from "../common/components/Paged";
import { useState, useEffect } from "react";
// import PokemonCard from "../common/components/PokemonCard";

export default function Pokemons() {
  const pokemons = useSelector((store) => store.pokemonsCopy);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("useE");
  //   dispatch(getAllPokemons());
  //   //   dispatch(getTypes());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
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
    <div>
      <h1>Pokemons</h1>
      <SearchBar />
      <Filter />
      <Sort />
      <Paged
        amountPerPage={amountPerPage}
        total={pokemons.length}
        paged={paged}
      />
      <PokemonCards currentPokemons={currentPokemons} />
      {/* <img src="https://www.professorlotus.com/Sprites/Pikachu.gif" alt="img" /> */}
      {/*<img
        src="https://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu.gif"
        alt="img"
      /> */}
    </div>
  );
}
