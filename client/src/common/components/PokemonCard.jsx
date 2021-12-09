import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemonDetail } from "../redux/actions";
import styled from "styled-components";
import { BackgroundColor } from "../styles/Styles";
export default function PokemonCard(props) {
  // console.log("sprite", sprite);
  // console.log("card", props);
  const dispatch = useDispatch();
  function handleOnClick() {
    dispatch(getPokemonDetail(props));
  }

  const { name, types, sprite, id } = props;
  // let { types } = props;
  // // console.log("types", types[0]);
  // if (types && typeof types[0] === "object") {
  //   types = types.map((e) => e.name);
  // }

  return (
    <CardContainer>
      <Link to={`/pokemons/${id} `} onClick={handleOnClick}>
        {name ? (
          <ImgDiv className={types[0].name} glass="0.8">
            <Name>{`${name[0].toUpperCase()}${name.slice(1)}`}</Name>
            {/* <h2>{attack}</h2> */}
            <PokeImg src={sprite} alt="poke" />
            <TypesDiv>
              {types.map((e) => (
                <img
                  key={e.id}
                  src={require(`../../assets/icons/${e.name}.svg`).default}
                  alt={e.name}
                />
              ))}
            </TypesDiv>
          </ImgDiv>
        ) : (
          <h3>Not Found</h3>
        )}
      </Link>
    </CardContainer>

    // <div>
    //   <h2>{name}</h2>
    //   <img src={sprite} alt="poke" />
    //   <h2>{types}</h2>
    // </div>
  );
}
const Name = styled.h2`
  color: var(--colors-black);
  font-size: 1.5rem;
`;
const TypesDiv = styled.div`
  > img {
    width: 32px;
  }
`;
const CardContainer = styled.div`
  /* min-width: 290px; */
  height: 100%;
  transition: all 3s;
  &:hover {
    /* transform: scale(1.05); */
    transform: translate(0, -5px);
    transition: all 250ms;
    /* animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; */
  }
`;
const ImgDiv = styled(BackgroundColor)`
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;
  border: solid var(--colors-black) 1px;
`;
const PokeImg = styled.img`
  max-width: 100%;
  height: 150px;
`;
