import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { sort, saveSort, saveFilter } from "../redux/actions";
export default function Sort() {
  const pokes = useSelector((store) => store.allPokemons);
  const inputs = useSelector((store) => store.inputs);

  //   console.log("types", types);

  const dispatch = useDispatch();

  function handleClick(e) {
    const value = e.target.value;
    // console.log("sort", pokes);
    dispatch(saveFilter(""));
    if (value === "disordered") {
      dispatch(saveSort(""));
      dispatch(sort(null, value, [...pokes]));
    }
    const input = value.split(" ");
    dispatch(saveSort(value));
    dispatch(sort(input[0], input[1], [...pokes]));
  }
  return (
    <SortContainer>
      {/* <form onSubmit={handleSelect}> */}
      {/* <Button /> */}
      <SortLabel>Order</SortLabel>
      <SortButton
        value="disordered"
        onClick={handleClick}
        // className={
        //   inputs.sort && inputs.sort === "disordered" ? "selected" : ""
        // }
      >
        Disordered
      </SortButton>
      <SortButton
        value="name asc"
        onClick={handleClick}
        className={inputs.sort && inputs.sort === "name asc" ? "selected" : ""}
      >
        A---Z
      </SortButton>
      <SortButton
        value="name desc"
        onClick={handleClick}
        className={inputs.sort && inputs.sort === "name desc" ? "selected" : ""}
      >
        Z---A
      </SortButton>
      <SortButton
        value="attack asc"
        onClick={handleClick}
        className={
          inputs.sort && inputs.sort === "attack asc" ? "selected" : ""
        }
      >
        Attack: low---high
      </SortButton>
      <SortButton
        value="attack desc"
        onClick={handleClick}
        className={
          inputs.sort && inputs.sort === "attack desc" ? "selected" : ""
        }
      >
        Attack: high--low
      </SortButton>
      {/* <select onChange={handleSelect}>
        <option value="disordered">Unordered</option>
        <option value="name asc">A---Z</option>
        <option value="name desc">Z---A</option>
        <option value="attack asc">Attack Asc</option>
        <option value="attack desc">Attack Desc</option>
      </select> */}
      {/* </form> */}
    </SortContainer>
  );
}

const SortContainer = styled.div`
  margin-top: 1.5rem;
  width: 85%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 0.5rem 0.5rem;
`;

const SortButton = styled.button`
  width: 100%;
  height: 1.5rem;
  color: var(--colors-secondary);
  background-color: var(--colors-black);
  /* background: linear-gradient(
    90deg,
    #272727 0%,
    rgba(24, 24, 24, 1) 50%,
    #272727 100%
  );*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;

  /* border: none; */
  border: solid black 2px;
  transition: filter 250ms;
  /* box-shadow: 0 0 4px 1px #2e2d2d inset; */
  /* box-shadow: 5px 5px 10px #1f1f1f, -5px -5px 10px #2f2f2f; */
  border-radius: 0.25rem;
  &.selected {
    color: var(--colors-black);
    background-color: var(--colors-secondary);
  }
  &:hover {
    cursor: pointer;
    box-shadow: none;
    transform: scale(1.02);
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
const SortLabel = styled.span`
  width: 100%;
  height: 1.5rem;
  color: var(--colors-secondary);
  background-color: var(--colors-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: solid black 3px;
  border-radius: 0.25rem 0.25rem 0 0;
`;
