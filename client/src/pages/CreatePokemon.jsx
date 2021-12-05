import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postPokemon, getAllPokemons } from "../common/redux/actions";
// import MenuSelector from "../common/components/MenuSelector";
export default function CreatePokemon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const types = useSelector((store) => store.types);

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
  const [input, setInput] = useState({
    name: "",
    attack: 0,
    defense: 0,
    hp: 0,
    speed: 0,
    weight: 0,
    height: 0,
    sprite: "",
    types: [],
  });
  console.log("create", input.types);

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    setErrors(validate({ ...input, [name]: value }));
  }

  // function handleCheck(e) {
  //   const { checked, value } = e.target;
  //   if (checked) {
  //     setInput({
  //       ...input,
  //       types: [...input.types, value],
  //     });
  //   } else {
  //     const newTypes = input.types.filter((type) => type !== value);
  //     setInput({
  //       ...input,
  //       types: newTypes,
  //     });
  //   }
  // }

  function handleSelect(e) {
    console.log("se activo", input.types);
    const { value, name } = e.target;
    // setErrors(validate({ ...input, [name]: value }));
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
    setErrors(validate(newInput));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(input));
    console.log("enviadno");
    alert("created");
    setInput({
      name: "",
      attack: 0,
      defense: 0,
      hp: 0,
      speed: 0,
      weight: 0,
      height: 0,
      sprite: "",
      types: "",
    });
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
    console.log("errors", errors);
    if (Object.keys(errors).length) return true;
    else return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);
  // const [selected, setSelected] = useState([]);

  // const data = [
  //   { id: 1, nombre: "zapato" },
  //   { id: 2, nombre: "tenis" },
  // ];

  return (
    <div>
      <Link to="/pokemons">
        <button>Back</button>
      </Link>
      <h1>Create Pokemon</h1>
      <form onSubmit={handleSubmit}>
        {nameInputs.map((name) =>
          createInput(name, input, handleChange, errors)
        )}

        <select onChange={handleSelect} name="types">
          <option disabled value="types">
            Types
          </option>
          <option value="clear">Clear</option>
          {types.map((type) => (
            <option key={type.id} value={type.id} name={type.name}>
              {`${type.name[0].toUpperCase()}${type.name.slice(1)}`}
            </option>
          ))}
        </select>
        {errors.types && <p>{errors.types}</p>}

        <h3>{input.types.map((e) => e + " ,")}</h3>

        {/* <div>
          {types.map((type) => {
            return (
              <div key={type.id}>
                <label>
                  <input
                    onChange={(e) => handleCheck(e)}
                    type="checkbox"
                    name="types"
                    value={type.id}
                  />
                  {type.name}
                </label>
              </div>
            );
          })}
        </div> */}
        {/* <MenuSelector data={data} value={selected} onChange={setSelected} /> */}
        <button disabled={disabled} type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

function createInput(name, input, handleChange, errors) {
  let type = "number";
  if (name === "name" || name === "sprite") type = "text";
  return (
    <div key={name}>
      <label>{`${name[0].toUpperCase()}${name.slice(1)}:`}</label>
      <input
        type={type}
        name={name}
        value={input[name]}
        onChange={handleChange}
        autoComplete="off"
      />
      {errors[name] && <p>{errors[name]}</p>}
    </div>
  );
}
function validate(input) {
  const errors = {};
  console.log("types", input.types);
  if (!input.name) errors.name = "Name is required.";
  if (!input.attack) errors.attack = "Attack is required.";
  if (!input.defense) errors.defense = "Defense is required.";
  if (!input.hp) errors.hp = "HP is required.";
  if (!input.speed) errors.speed = "Speed is required.";
  if (!input.weight) errors.weight = "Weight is required.";
  if (!input.height) errors.height = "Height is required.";
  if (!input.sprite) errors.sprite = "Sprite is required.";
  if (!input.types.length) {
    errors.types = "Types is required.";
  }
  console.log("types", errors.types);

  return errors;
}
//  <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={input.name}
//             onChange={handleChange}
//             autoComplete="off"
//           />
//         </div>
//         <div>
//           <label>Attack:</label>
//           <input
//             type="number"
//             name="attack"
//             value={input.attack}
//             onChange={handleChange}
//             autoComplete="off"
//           />
//         </div>
//         <div>
//           <label>Defense:</label>
//           <input
//             type="number"
//             name="defense"
//             value={input.defense}
//             onChange={handleChange}
//             autoComplete="off"
//           />
//         </div>
//         <div>
//           <label>HP:</label>
//           <input
//             type="number"
//             name="hp"
//             value={input.hp}
//             onChange={handleChange}
//             autoComplete="off"
//           />
//         </div>
//         <div>
//           <label>Speed:</label>
//           <input
//             type="number"
//             name="speed"
//             value={input.speed}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Weight:</label>
//           <input
//             type="number"
//             name="weight"
//             value={input.weight}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Height:</label>
//           <input
//             type="number"
//             name="height"
//             value={input.height}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Sprite:</label>
//           <input
//             type="text"
//             name="sprite"
//             value={input.sprite}
//             onChange={handleChange}
//           />
//         </div>
