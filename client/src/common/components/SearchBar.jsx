import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, clearSearch } from "../redux/actions";

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
    <div>
      <form onSubmit={handleOnSearch}>
        <input
          placeholder="Search Pokemon"
          id="search-bar-input"
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
