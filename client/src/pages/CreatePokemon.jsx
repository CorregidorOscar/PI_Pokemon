import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postPokemon, getAllPokemons, clearAll } from "../common/redux/actions";
// import MenuSelector from "../common/components/MenuSelector";
import styled, { keyframes } from "styled-components";
import { BackgroundAnimated, StyledButton } from "../common/styles/Styles";

const IMG_URL = "https://www.professorlotus.com/Sprites";
export default function CreatePokemon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const types = useSelector((store) => store.types);
  const pokemons = useSelector((store) => store.allPokemons);
  const [image, setImage] = useState("");
  // const [loaded, setLoaded] = useState(false);
  const [created, setCreated] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    attack: "",
    defense: "",
    hp: "",
    speed: "",
    weight: "",
    height: "",
    sprite: "",
    types: "",
  });
  function validate(input, name, loaded) {
    // const errors = {};
    // console.log("types", input.types);
    switch (name) {
      case "name": {
        let name = "";
        if (pokemons.find((e) => e.name === input.name))
          name = "The pokemon already exists .";
        else if (!input.name) name = "Name is required.";
        else if (input.name.length < 3)
          name = "Name must have more than 3 characters";
        return { ...errors, name };
      }
      case "attack": {
        // console.log("attack", input.attack);
        let attack = "";
        if (!input.attack) attack = "Attack is required.";
        else if (input.attack < 1) attack = "Attack must be greater than 0 .";
        return { ...errors, attack };
      }
      case "defense": {
        let defense = "";
        if (!input.defense) defense = "Defense is required.";
        else if (input.defense < 1)
          defense = "Defense must be greater than 0 .";
        return { ...errors, defense };
      }
      case "hp": {
        let hp = "";
        if (!input.hp) hp = "HP is required.";
        else if (input.hp < 1) hp = "HP must be greater than 0 .";
        return { ...errors, hp };
      }
      case "speed": {
        let speed = "";
        if (!input.speed) speed = "Speed is required.";
        else if (input.speed < 1) speed = "Speed must be greater than 0 .";
        return { ...errors, speed };
      }
      case "weight": {
        let weight = "";
        if (!input.weight) weight = "Weight is required.";
        else if (input.weight < 1) weight = "Weight must be greater than 0 .";
        return { ...errors, weight };
      }
      case "height": {
        let height = "";
        if (!input.height) height = "Height is required.";
        else if (input.height < 1) height = "Height must be greater than 0 .";
        return { ...errors, height };
      }
      case "sprite": {
        let sprite = "";

        // if (input && !input.sprite) sprite = "Sprite is required.";
        if (!loaded) sprite = "Search a pokemon.";
        return { ...errors, sprite };
      }
      case "types": {
        let types = "";
        if (!input.types.length) types = "Types is required.";
        return { ...errors, types };
      }
      default: {
        return errors;
      }
    }
    // if (!input.name) {
    //   // console.log("errors", errors);
    //   // const name = "Name is required.";
    //   return { ...errors, name : "Name is required." };
    // }
    // if (!input.attack) errors.attack = "Attack is required.";
    // if (!input.defense) errors.defense = "Defense is required.";
    // if (!input.hp) errors.hp = "HP is required.";
    // if (!input.speed) errors.speed = "Speed is required.";
    // if (!input.weight) errors.weight = "Weight is required.";
    // if (!input.height) errors.height = "Height is required.";
    // if (!input.sprite) errors.sprite = "Sprite is required.";
    // if (!input.types.length) {
    //   errors.types = "Types is required.";
    // }

    // return errors;
  }
  const [input, setInput] = useState({
    name: "",
    attack: "",
    defense: "",
    hp: "",
    speed: "",
    weight: "",
    height: "",
    sprite: "",
    types: [],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    // console.log("load", value, input.sprite);

    setErrors(validate({ ...input, [name]: value }, name));
    // setErrors(validate(value, name));
  }

  function handleSelect(e) {
    // setErrors(validate({ ...input, [name]: value }));
    const { value, name } = e.target;
    e.target.value = "types";
    let newInput = [];
    if (value === "clear") {
      newInput = {
        ...input,
        types: [],
      };
      // setErrors(validate(newInput));

      setInput(newInput);
    } else if (input.types.includes(value)) {
      newInput = {
        ...input,
        types: input.types.filter((type) => type !== value),
      };
      // newTypes = input.types.filter((type) => type !== value);
      // const ele = document.getElementsByName(name);
      // ele.disabled = true;
      setInput(newInput);
    } else {
      newInput = {
        ...input,
        types: [...input.types, value],
      };
      setInput(newInput);
    }
    setErrors(validate(newInput, name));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newInput = {
      ...input,
      sprite: image,
      name: input.name.trim().toLowerCase(),
    };
    dispatch(postPokemon(newInput));
    setCreated(true);
  }
  function handleOk() {
    setInput({
      name: "",
      attack: "",
      defense: "",
      hp: "",
      speed: "",
      weight: "",
      height: "",
      sprite: "",
      types: [],
    });
    dispatch(clearAll());
    dispatch(getAllPokemons());
    navigate("/pokemons");
  }
  const nameInputs = [
    "name",
    "attack",
    "defense",
    "hp",
    "speed",
    "weight",
    "height",
    "sprite",
  ];

  let disabled = useMemo(() => {
    if (Object.keys(errors).find((e) => errors[e] !== "")) return true;
    if (Object.keys(input).find((e) => input[e].toString() === "")) return true;
    else return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  function handleFocus(e) {
    const { name, value } = e.target;
    // let isLoaded = !value ? true : false;
    setErrors(validate({ ...input, [name]: value }, name));
  }
  function handleSprite(e) {
    const { name, value } = e.target;
    let isLoaded = false;
    if (value === "") {
      isLoaded = true;
      setImage("");
    } else setImage(`${IMG_URL}/${value}.gif`);
    setInput({
      ...input,
      [name]: value,
    });
    setErrors(validate({ ...input, [name]: value }, name, isLoaded));
  }
  function handleLoad(e) {
    // setLoaded(true);
    setErrors(validate(null, "sprite", true));
  }
  function createInput(name) {
    let type = "number";
    if (name === "name" || name === "sprite") type = "text";
    return (
      <InputContainer key={name}>
        <div>
          <label>{`${name}: `}</label>
          {/* <label>{`${name[0].toUpperCase()}${name.slice(1)}:`}</label> */}
          <Input
            type={type}
            name={name}
            value={input[name]}
            onChange={name === "sprite" ? handleSprite : handleChange}
            autoComplete="off"
            className={errors[name] ? "error" : input[name] ? "complete" : ""}
            onFocus={handleFocus}
            placeholder={
              name === "sprite" ? "Enter a pokemon name" : `Enter a ${name}`
            }
          />
        </div>
        {errors[name] && (
          <p animation-delay="250" animation-type="fadeIn">
            {errors[name]}
          </p>
        )}
      </InputContainer>
    );
  }
  if (created)
    return (
      <CreateContainer>
        <Info className="created">
          <img
            src="https://c.tenor.com/dABrbCe1n8MAAAAi/pikachu-oh-yeah.gif"
            alt="created"
          />
          <h1>Pokemon created successfully</h1>

          <Create onClick={handleOk}>OK</Create>
        </Info>
      </CreateContainer>
    );
  else
    return (
      <CreateContainer>
        <Link to="/pokemons">
          <Back>Home</Back>
        </Link>
        <Info>
          <ImageDiv glass="1">
            <img
              src={image}
              alt="Search for a valid sprite of a pokemon"
              id="form-image"
              onLoad={handleLoad}
            />
          </ImageDiv>
          <InfoDiv onSubmit={handleSubmit}>
            {nameInputs.map((name) =>
              createInput(name, input, handleChange, errors, handleFocus)
            )}
            <TypesDiv>
              <Select
                onChange={handleSelect}
                name="types"
                className={
                  errors.types ? "error" : input.types.length ? "complete" : ""
                }
              >
                <option disabled value="types">
                  Types
                </option>
                <option value="clear">Clear</option>
                {types.map((type) => (
                  <option
                    key={type.id}
                    value={type.id}
                    name={type.name}
                    id={type.id}
                  >
                    {/* {`${type.name[0].toUpperCase()}${type.name.slice(1)}`} */}
                    {type.name}
                  </option>
                ))}
              </Select>
              {errors.types && <p>{errors.types}</p>}

              {/* <h3>{input.types.map((e) => e + " ,")}</h3> */}
              <div>
                {input.types.map((e) => {
                  const typeName = types.find(
                    (t) => t.id.toString() === e
                  ).name;
                  return (
                    <Img
                      key={e}
                      src={require(`../assets/icons/${typeName}.svg`).default}
                      alt={e}
                      back={typeName}
                    />
                  );
                })}
              </div>
            </TypesDiv>
            <div>
              <Create disabled={disabled} type="submit">
                Create
              </Create>
            </div>
          </InfoDiv>
        </Info>
      </CreateContainer>
    );
}

const CreateContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--colors-black);
`;
const Info = styled.div`
  width: 75vw;
  height: 75vh;
  display: grid;
  grid-template-columns: repeat(3, 25vw);
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.created {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;
const fade = keyframes`
  0%{
    /* transform: translate(-50%, -50%); */
    opacity: 0;
  }
  100%{
    /* transform: translate(0,0); */
opacity:1;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  /* align-items: center; */
  padding: 0 3rem;
  font-size: 1.25rem;
  div {
    text-transform: capitalize;

    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    /* transition: all 3s; */
    /* height: 1rem; */
    padding-top: 1rem;
    color: var(--colors-primary);

    animation-delay: 1s;
    animation: ${fade} 0.5s;

    font-size: 0.75rem;
  }
  /* transform: translate(25%, 0); */
`;
const Input = styled.input`
  height: 32px;
  border-radius: 0.5rem;
  border: solid var(--colors-black) 3px;
  width: 60%;
  outline: none;
  &.error {
    border: solid var(--colors-primary) 4px;
  }
  &.complete {
    border: solid var(--colors-grass) 4px;
  }
  :focus {
    border: solid var(--colors-water) 4px;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const Back = styled(StyledButton)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0.25rem;
`;
const Create = styled(StyledButton)`
  background-color: ${(props) =>
    props.disabled ? `var(--colors-secondary)` : "var(--colors-primary)"};
  color: ${(props) =>
    props.disabled ? `var(--colors-black)` : "var(--colors-secondary)"};
  ${(props) =>
    props.disabled
      ? `:hover{transform:none; cursor:default;}`
      : `:hover{cursor:pointer;}`};
  /* transform: translate(50%, 50%); */
`;
const ImageDiv = styled(BackgroundAnimated)`
  grid-column: 1/2;
  position: relative;
  /* background-color: var(--colors-secondary); */
  border-radius: 2rem 0 0 2rem;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--colors-secondary);
    font-size: 2rem;
    text-shadow: rgba(0, 0, 0, 0.5) 0px 10px 20px,
      rgba(0, 0, 0, 0.5) 0px 6px 6px;
    /* > #alttex-image {
      width: 32px;
      height: 32px;
    } */
  }
`;
const InfoDiv = styled.form`
  grid-column: 2/4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  background-color: var(--colors-gray);
  padding: 2rem;
  border-radius: 0 2rem 2rem 0;
  column-gap: 1rem;
  background-color: #fff3f090;
  div {
    width: 100%;
  }
`;
const TypesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  /* option {
    display: flex;
    justify-content: center;
    align-items: center;
  }*/
  div {
    column-gap: 1rem;
  }
  p {
    color: var(--colors-primary);
    animation-delay: 1s;
    animation: ${fade} 0.5s;
    font-size: 0.75rem;
  }
`;
const Select = styled.select`
  margin-top: 1rem;
  /* border: solid green 2px; */
  /* width: 50%;
    height: 20%; */

  display: block;
  font-size: 0.8rem;
  color: #444;
  line-height: 1.3;
  padding: 0.4em 1.4em 0.3em 0.8em;
  width: 200px;
  max-width: 100%;
  box-sizing: border-box;
  height: 2rem;
  /* margin: 20px auto; */
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.03);
  border-radius: 0.3em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  margin-bottom: 1rem;

  &.error {
    border: solid var(--colors-primary) 4px;
  }
  &.complete {
    border: solid var(--colors-grass) 4px;
  }

  ::-ms-expand {
    display: none;
  }
  s:hover {
    border-color: #888;
  }
  :focus {
    border: solid var(--colors-water) 4px;
    /* box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222; */
    outline: none;
  }
  option {
    text-transform: capitalize;
    font-weight: normal;
  }

  .classOfElementToColor:hover {
    background-color: red;
    color: black;
  }

  option[selected] {
    background-color: orange;
  }
`;
const Img = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => `var(--colors-${props.back})`};
  /* margin-top: 1rem; */
`;
