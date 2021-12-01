import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemonDetail } from "../redux/actions";
export default function PokemonCard(props) {
  // console.log("sprite", sprite);
  // console.log("card", props);
  const dispatch = useDispatch();
  function handleOnClick() {
    dispatch(getPokemonDetail(props));
  }

  const { name, attack, sprite, types, id } = props;
  return (
    <div>
      <Link to={`/pokemons/${id}`} onClick={handleOnClick}>
        {name ? (
          <div>
            <h2>{name}</h2>
            <h2>{attack}</h2>
            <img src={sprite} alt="poke" />
            <h2>{types}</h2>
          </div>
        ) : (
          <h3>Not Found</h3>
        )}
      </Link>
    </div>

    // <div>
    //   <h2>{name}</h2>
    //   <img src={sprite} alt="poke" />
    //   <h2>{types}</h2>
    // </div>
  );
}
