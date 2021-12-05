import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByID } from "../common/redux/actions";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export default function PokemonDetails() {
  const { id } = useParams();
  // id = parseInt(id);
  const pokemon = useSelector((store) => store.pokemon);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getPokemonByID(id));

  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  console.log("details", pokemon, id);
  const { name, attack, sprite, hp, defense, speed, weight, height } = pokemon;
  let { types } = pokemon;
  // console.log("types", types[0]);
  if (typeof types[0] === "object") {
    types = types.map((e) => e.name);
  }
  return (
    <div>
      <Link to="/pokemons">
        <button>back</button>
      </Link>
      {!Object.entries(pokemon).length && <h1>Loading...</h1>}
      {Object.entries(pokemon).length && (
        <div>
          <h3>{`ID: ${id}`}</h3>
          <h1>{name}</h1>
          <img src={sprite} alt="poke" />
          <h2>types: {types}</h2>
          <h2>hp: {hp}</h2>
          <h2>attack: {attack}</h2>
          <h2>defense: {defense}</h2>
          <h2>speed: {speed}</h2>
          <h2>weight: {weight}</h2>
          <h2>height: {height}</h2>
        </div>
      )}
    </div>
  );
}
