import Filter from "./Filter";
import Sort from "./Sort";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Pokedex() {
  return (
    <PokedexContainer>
      <SearchBar />
      <Link to="/pokemons/create">
        <button>Create</button>
      </Link>
      <Sort />
      <Filter />
    </PokedexContainer>
  );
}
const PokedexContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--colors-primary);
  border-radius: 20px;
  border-color: black;
  border-width: 2px;
  border-style: solid;
`;
