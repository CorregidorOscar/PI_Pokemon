import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getPokemonByID } from "../common/redux/actions";
import { Link } from "react-router-dom";
import { Title } from "../common/styles/global.jsx";

import { getTypes, getAllPokemons } from "../common/redux/actions";

export default function Home() {
  //   const Title = styled.h1`
  //   font-size: 1.5em;
  //   text-align: center;
  //   color: palevioletred;
  // `;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getTypes());

    // dispatch(getPokemonByID(2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Title>'Landing'</Title>
      <Link to="/pokemons">
        <button>Pokemons</button>
      </Link>
    </div>
  );
}
