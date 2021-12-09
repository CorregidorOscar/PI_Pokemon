import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filter, clearFilter } from "../redux/actions";
// import "./Filter.css";

export default function Filter() {
  const types = useSelector((store) => store.types);
  const pokes = useSelector((store) => store.allPokemons);

  //   console.log("types", types);

  const dispatch = useDispatch();

  // function handleSelect(e) {
  //   dispatch(filter(e.target.value, pokes));
  // }
  function handleCheck(e) {
    console.log(e.target.value);
    const { value, checked } = e.target;
    if (checked) dispatch(filter(value, pokes));
    else dispatch(clearFilter());
    let list = document.getElementsByClassName("check");
    for (let input of list) {
      if (input.value !== value) input.checked = false;
    }
  }
  return (
    <FilterContainer>
      <FilterLabel>Types</FilterLabel>
      <TypesContainer>
        {types.length ? (
          types.map((e) => (
            <Label>
              <Input
                code={e.name}
                onClick={handleCheck}
                value={e.name}
                className="check"
              />
              <Img
                code={e.name}
                src={require(`../../assets/icons/${e.name}.svg`).default}
                alt="icon"
                // width="32px"
                // border-radius="9999px"
              />
              {/* <LabelText icon={e.name} /> */}
            </Label>
            // <FilterCheck key={e.id} value={e.name}>
            //   <input type="checkbox" name={e.name} />
            //   <img
            //     src={require(`../../assets/icons/${e.name}.svg`).default}
            //     alt="icon"
            //   />
            //   {/* {`${e.name[0].toUpperCase()}${e.name.slice(1)}`} */}
            // </FilterCheck>
          ))
        ) : (
          <option value="error">error</option>
        )}
      </TypesContainer>
      {/* <form onSubmit={handleSelect}> */}

      {/* <select onChange={handleSelect}>
        <option value="all">All</option>
        {types.length ? (
          types.map((e) => (
            <option key={e.id} value={e.name}>
              {`${e.name[0].toUpperCase()}${e.name.slice(1)}`}
            </option>
          ))
        ) : (
          <option value="error">error</option>
        )}
      </select> */}

      {/* </form> */}
    </FilterContainer>
  );
}

const Input = styled.input.attrs({ type: "checkbox" })`
  display: none;

  /* img {
    width: 32px;
    border-radius: 100%;
  } */
  &:checked + img {
    background-color: ${(props) => `var(--colors-${props.code})`};
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const Img = styled.img`
  width: 32px;
  border-radius: 9999px;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all 250ms;

    background-color: ${(props) => `var(--colors-${props.code})`};
  }
`;

const LabelText = styled.img`
  background-image: ${(props) =>
    `url(${require(`../../assets/icons/${props.icon}.svg`).default})`};
  ${Input}:checked + && {
    background-color: blue;
  }
  /* ${(props) => {
    switch (props.$mode) {
      case "dark":
        return `
          background-color: black;
          color: white;
          ${Input}:checked + && {
            color: blue;
          }
        `;
      default:
        return `
          background-color: white;
          color: black;
          ${Input}:checked + && {
            background-color: red;
          }
        `;
    }
  }} */
`;

const FilterContainer = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  height: 24rem;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  background-color: var(--colors-black);
`;
const TypesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  padding: 1rem 3rem;
  border: solid black 3px;
  border-top: none;
  border-radius: 0 0 0.5rem 0.5rem;
`;
const FilterLabel = styled.span`
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
const FilterButton = styled.button`
  width: 100%;
  height: 1.5rem;
  color: var(--colors-secondary);
  background-color: var(--colors-black);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
  border: solid black 2px;
  transition: filter 250ms;
  border-radius: 0.25rem;
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

const FilterCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > input {
    /* display: none; */
  }
  > img {
    height: 3rem;
    /* width: 2.5rem; */
    border: 5px solid transparent;
  }
  > input:checked > img {
    border-color: blue;
  }
`;
// const Types = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   transition: 0.25s;
//   img {
//     margin: 0.5em;
//     height: 2rem;
//     width: 2rem;
//     object-fit: contain;
//     transition: 0.25s;
//     &:hover {
//       cursor: pointer;
//       transform: scale(1.25);
//     }
//   }
// `;
