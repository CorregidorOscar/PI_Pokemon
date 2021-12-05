import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemonDetail } from "../redux/actions";
import styled from "styled-components";

const CardCpontainer = styled.div`
  width: 100%;
  height: 100%;
`;
const ImgDiv = styled.div`
  background-color: var(--colors-water);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const PokeImg = styled.img`
  max-width: 100%;
  height: 190px;
`;
export default function PokemonCard(props) {
  // console.log("sprite", sprite);
  // console.log("card", props);
  const dispatch = useDispatch();
  function handleOnClick() {
    dispatch(getPokemonDetail(props));
  }

  const { name, attack, sprite, id } = props;
  let { types } = props;
  // console.log("types", types[0]);
  if (types && typeof types[0] === "object") {
    types = types.map((e) => e.name);
  }
  return (
    <CardCpontainer>
      <Link to={`/pokemons/${id} `} onClick={handleOnClick}>
        {name ? (
          <ImgDiv>
            <h2>{name}</h2>
            {/* <h2>{attack}</h2> */}
            <PokeImg src={sprite} alt="poke" />
            <h2>{types}</h2>
          </ImgDiv>
        ) : (
          <h3>Not Found</h3>
        )}
      </Link>
    </CardCpontainer>

    // <div>
    //   <h2>{name}</h2>
    //   <img src={sprite} alt="poke" />
    //   <h2>{types}</h2>
    // </div>
  );
}
