import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemonDetail } from "../redux/actions";
import styled from "styled-components";

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
  width: 291px;
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
const ImgDiv = styled.div`
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;
  border: solid var(--colors-black) 1px;

  &.normal {
    background: rgb(168, 167, 122);
    background: radial-gradient(
      circle,
      rgba(168, 167, 122, ${(props) => props.glass}) 0%,
      rgba(168, 167, 122, ${(props) => props.glass}) 35%,
      rgba(140, 139, 105, ${(props) => props.glass}) 100%
    );
  }
  &.fire {
    background: rgb(238, 129, 48);
    background: radial-gradient(
      circle,
      rgba(238, 129, 48, ${(props) => props.glass}) 0%,
      rgba(238, 129, 48, ${(props) => props.glass}) 35%,
      rgba(255, 90, 0, ${(props) => props.glass}) 100%
    );
  }
  &.water {
    background: rgb(99, 144, 240);
    background: radial-gradient(
      circle,
      rgba(99, 144, 240, ${(props) => props.glass}) 0%,
      rgba(99, 144, 240, ${(props) => props.glass}) 35%,
      rgba(35, 105, 255, ${(props) => props.glass}) 100%
    );
  }
  &.electric {
    background: rgb(247, 208, 44);
    background: radial-gradient(
      circle,
      rgba(247, 208, 44, ${(props) => props.glass}) 0%,
      rgba(247, 208, 44, ${(props) => props.glass}) 35%,
      rgba(230, 156, 36, ${(props) => props.glass}) 100%
    );
  }
  &.grass {
    background: rgb(122, 199, 76);
    background: radial-gradient(
      circle,
      rgba(122, 199, 76, ${(props) => props.glass}) 0%,
      rgba(122, 199, 76, ${(props) => props.glass}) 35%,
      rgba(81, 186, 18, ${(props) => props.glass}) 100%
    );
  }
  &.ice {
    background: rgb(179, 236, 233);
    background: radial-gradient(
      circle,
      rgba(179, 236, 233, ${(props) => props.glass}) 0%,
      rgba(150, 217, 214, ${(props) => props.glass}) 35%,
      rgba(86, 219, 213, ${(props) => props.glass}) 100%
    );
  }
  &.fighting {
    background: rgb(194, 46, 40);
    background: radial-gradient(
      circle,
      rgba(194, 46, 40, ${(props) => props.glass}) 0%,
      rgba(194, 46, 40, ${(props) => props.glass}) 35%,
      rgba(187, 24, 17, ${(props) => props.glass}) 100%
    );
  }
  &.poison {
    background: rgb(156, 66, 154);
    background: radial-gradient(
      circle,
      rgba(156, 66, 154, ${(props) => props.glass}) 0%,
      rgba(163, 62, 161, ${(props) => props.glass}) 35%,
      rgba(160, 26, 143, ${(props) => props.glass}) 100%
    );
  }
  &.ground {
    background: rgb(218, 108, 30);
    background: radial-gradient(
      circle,
      rgba(218, 108, 30, ${(props) => props.glass}) 0%,
      rgba(218, 112, 36, ${(props) => props.glass}) 50%,
      rgba(177, 94, 33, ${(props) => props.glass}) 100%
    );
  }
  &.flying {
    background: rgb(163, 145, 255);
    background: radial-gradient(
      circle,
      rgba(163, 145, 255, ${(props) => props.glass}) 0%,
      rgba(134, 128, 255, ${(props) => props.glass}) 50%,
      rgba(117, 110, 254, ${(props) => props.glass}) 100%
    );
  }
  &.psychic {
    background: rgb(249, 85, 135);
    background: radial-gradient(
      circle,
      rgba(249, 85, 135, ${(props) => props.glass}) 0%,
      rgba(249, 85, 135, ${(props) => props.glass}) 35%,
      rgba(228, 58, 110, ${(props) => props.glass}) 100%
    );
  }
  &.bug {
    background: rgb(191, 213, 26);
    background: radial-gradient(
      circle,
      rgba(191, 213, 26, ${(props) => props.glass}) 0%,
      rgba(166, 185, 26, ${(props) => props.glass}) 35%,
      rgba(98, 185, 26, ${(props) => props.glass}) 100%
    );
  }
  &.rock {
    background: rgb(168, 153, 122);
    background: radial-gradient(
      circle,
      rgba(168, 153, 122, ${(props) => props.glass}) 0%,
      rgba(168, 153, 122, ${(props) => props.glass}) 50%,
      rgba(147, 123, 70, ${(props) => props.glass}) 100%
    );
  }
  &.ghost {
    background: rgb(115, 87, 151);
    background: radial-gradient(
      circle,
      rgba(115, 87, 151, ${(props) => props.glass}) 0%,
      rgba(115, 87, 151, ${(props) => props.glass}) 35%,
      rgba(107, 41, 142, ${(props) => props.glass}) 100%
    );
  }
  &.dragon {
    background: rgb(118, 61, 255);
    background: radial-gradient(
      circle,
      rgba(118, 61, 255, ${(props) => props.glass}) 0%,
      rgba(111, 53, 252, ${(props) => props.glass}) 35%,
      rgba(74, 0, 255, ${(props) => props.glass}) 100%
    );
  }
  &.dark {
    background: rgb(47, 47, 47);
    background: radial-gradient(
      circle,
      rgba(47, 47, 47, ${(props) => props.glass}) 0%,
      rgba(24, 24, 24, ${(props) => props.glass}) 50%,
      rgba(0, 0, 0, ${(props) => props.glass}) 100%
    );
  }
  &.steel {
    background: rgb(183, 183, 206);
    background: radial-gradient(
      circle,
      rgba(183, 183, 206, ${(props) => props.glass}) 0%,
      rgba(183, 183, 206, ${(props) => props.glass}) 35%,
      rgba(103, 103, 103, ${(props) => props.glass}) 100%
    );
  }
  &.fairy {
    background: rgb(214, 133, 173);
    background: radial-gradient(
      circle,
      rgba(214, 133, 173, ${(props) => props.glass}) 0%,
      rgba(214, 133, 173, ${(props) => props.glass}) 35%,
      rgba(210, 97, 153, ${(props) => props.glass}) 100%
    );
  }
`;
const PokeImg = styled.img`
  max-width: 100%;
  height: 150px;
`;
