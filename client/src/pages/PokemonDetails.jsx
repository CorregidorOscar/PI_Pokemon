import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByID } from "../common/redux/actions";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  BackgroundAnimated,
  BackgroundColor,
  StyledButton,
} from "../common/styles/Styles";
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
    <DetailsContainer className={types[0]} glass="1">
      <Link to="/pokemons">
        <Back>Home</Back>
      </Link>
      {!Object.entries(pokemon).length && <h1>Loading...</h1>}
      {Object.entries(pokemon).length && (
        <Info>
          <ImageDiv className={types[0]} glass="1">
            <img src={sprite} alt="poke" />
          </ImageDiv>
          <InfoDiv>
            <h3>{id}</h3>
            <Name>
              <h1>{name}</h1>

              <div>
                {types.map((e) => (
                  <Img
                    src={require(`../assets/icons/${e}.svg`).default}
                    alt={e}
                    back={e}
                  />
                ))}
              </div>
            </Name>
            <Stat>
              <div>
                <img
                  src="https://api.iconify.design/jam:sword-f.svg"
                  alt="attack"
                />
              </div>
              <h2>Attack: {attack}</h2>
            </Stat>
            <Stat>
              <div>
                <img
                  src="https://api.iconify.design/bx:bxs-shield-alt-2.svg"
                  alt="defense"
                />
              </div>
              <h2>Defense: {defense}</h2>
            </Stat>
            <Stat>
              <div>
                <img
                  src="https://api.iconify.design/clarity:heart-solid.svg"
                  alt="hp"
                />
              </div>
              <h2>HP: {hp}</h2>
            </Stat>
            <Stat>
              <div>
                <img
                  src="https://api.iconify.design/ri:speed-fill.svg"
                  alt="speed"
                />
              </div>
              <h2>Speed: {speed}</h2>
            </Stat>
            <Stat>
              <div>
                <img
                  src="https://api.iconify.design/fa-solid:weight-hanging.svg"
                  alt="weight"
                />
              </div>
              <h2>Weight: {weight}</h2>
            </Stat>
            <Stat>
              <div>
                <img
                  src="https://api.iconify.design/pixelarticons:human-height-alt.svg"
                  alt="height"
                />
              </div>
              <h2>Height: {height}</h2>
            </Stat>
          </InfoDiv>
        </Info>
      )}
    </DetailsContainer>
  );
}

const DetailsContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Back = styled(StyledButton)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0.25rem;
`;
const Info = styled.div`
  width: 75vw;
  height: 75vh;
  display: grid;
  grid-template-columns: repeat(3, 25vw);
  border-radius: 2rem;

  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  /* div:nth-child(1) {
    grid-column: 1;
  }
  div:nth-child(2) {
    grid-column: 2 / 3;
  } */
`;
const ImageDiv = styled(BackgroundColor)`
  grid-column: 1/2;
  position: relative;
  /* background-color: var(--colors-secondary); */
  border-radius: 2rem 0 0 2rem;
  border: solid var(--colors-black) 1px;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
const InfoDiv = styled.div`
  grid-column: 2/4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 3rem repeat(4, 1fr);
  background-color: rgba(255, 255, 255, 0.7);
  /* background-color: var(--colors-gray); */
  padding: 2rem;
  border-radius: 0 2rem 2rem 0;
  border: solid var(--colors-black) 1px;
  border-left: none;
  text-transform: capitalize;
  h3 {
    grid-column: 1/3;
    display: flex;
    justify-content: end;
    font-size: 1rem;
    /* align-items: center; */
  }

  /* div {
    grid-column: 1/3;
    display: flex;
    justify-content: center;
    column-gap: 2rem;
  } */
`;
const Name = styled.div`
  grid-column: 1/3;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;
  font-size: 2rem;
  width: 100%;
  div {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    column-gap: 1.5rem;
  }
`;
const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${(props) => `var(--colors-${props.back})`};
`;

const Stat = styled.div`
  display: flex;
  /* justify-content: left; */
  align-items: center;
  font-size: 1rem;
  column-gap: 1rem;
  transform: translate(25%, 0);
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--colors-secondary);
  }
`;

// const Back = styled(Link)`
//   position: absolute;
//   left: 0;
//   top: 0;
// `;
