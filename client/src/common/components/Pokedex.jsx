import Filter from "./Filter";
import Sort from "./Sort";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Pokedex() {
  return (
    <PokedexContainer>
      <SearchBar />
      <NavLink to="/pokemons/create" className="navlink">
        <PokedexButton>Create Pokemon</PokedexButton>
      </NavLink>
      <Settings>Settings</Settings>

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
  /* justify-content: space-between; */
  background-color: var(--colors-primary);
  border-radius: 20px;
  border-color: black;
  border-width: 2px;
  border-style: solid;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  > .navlink {
    width: 70%;
  }
`;

const PokedexButton = styled.button`
  width: 100%;
  height: 2.5rem;
  color: var(--colors-secondary);
  background-color: var(--colors-black);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
  border: solid black 2px;
  transition: filter 250ms;
  border-radius: 1rem;
  transition: all 1s;

  &:hover {
    cursor: pointer;
    box-shadow: none;
    transform: scale(1.05);
    /* transition: 0.2s ease-in; */
  }
  &:active {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const Settings = styled.label`
  height: 2.5rem;
  width: 20vw;
  margin-top: 1.5rem;
  /* background-color: var(--colors-reddark); */
  color: var(--colors-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: var(--colors-black);
  border-width: 2px;
  border-style: solid;
  border-radius: 0.5rem;
  font-size: 1.2rem;
`;
