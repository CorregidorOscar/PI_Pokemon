import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, clearSearch } from "../redux/actions";
import styled from "styled-components";
import searchIcon from "../../assets/searchIcon.svg";
export default function SearchBar() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  function handleOnSearch(e) {
    e.preventDefault();
    // if (search === "") dispatch(clearFilter());
    dispatch(getPokemonByName(search.trim().toLowerCase()));
  }

  function handleChange(e) {
    const value = e.target.value;
    if (value === "") dispatch(clearSearch());
    setSearch(e.target.value);
  }
  return (
    // <SearchContainer>
    <SearchContainer onSubmit={handleOnSearch}>
      <SearchInput
        placeholder="Search Pokemon"
        id="search-bar-input"
        onChange={handleChange}
        autoComplete="off"
      />
      <SearchButton type="submit">
        <SearchSVG
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          width="24px"
          height="24px"
          stroke="#ce1131"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </SearchSVG>
        {/* <img src={searchIcon} alt="search icon" /> */}
      </SearchButton>
    </SearchContainer>
    // </SearchContainer>
  );
}

const SearchContainer = styled.form`
  position: relative;
  width: 85%;
  height: 40px;
  margin: 1.5rem;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.3rem;
  border-style: solid;
  border-color: black;
  border-width: 2px;
  outline: none;
  background-color: var(--colors-secondary);
  border-radius: 1rem;
  font-size: 1rem;
`;
const SearchButton = styled.button`
  height: 40px;
  position: absolute;
  /* top: calc(0.1rem + 1px);
  right: calc(0.1rem + 1px); */
  right: 0;
  top: 0;
  color: var(--colors-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
  border-radius: 0% 1rem 1rem 0%;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  background-color: transparent;
  /* cursor: pointer; */
  &.icon {
    stroke: #2c3e50;
  }
  &:hover {
    color: white;
    background-color: var(--colors-eerieBlack);
    transition: 0.5s;
  }
`;
const SearchSVG = styled.svg`
  &:hover {
    stroke: var(--colors-secondary);
    transition: 0.5s;
    cursor: pointer;
  }
`;
