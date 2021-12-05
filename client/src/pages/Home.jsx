import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getPokemonByID } from "../common/redux/actions";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { getTypes, getAllPokemons } from "../common/redux/actions";
// import styles from "./Home.module.css";
import Bulbasaur from "../assets/Bulbasaur.gif";
import Charmander from "../assets/Charmander.gif";
import Squirtle from "../assets/Squirtle.gif";
import pokeLogo from "..//assets/pokemon-23.svg";

const bg =
  "radial-gradient(circle,rgba(238, 129, 48, 1) 0%,rgba(238, 129, 48, 1) 35%,rgba(255, 90, 0, 1) 100%);";
const HomeContainer = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
`;
const LinkLogo = styled.div`
  > .navlink {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  /* > .pokelogo {
    width: 30rem;
    height: 10rem;
  } */
  /* &:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in;
  } */
`;
const PokeLogo = styled.img`
  width: 30rem;
  height: 10rem;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in;
  }
`;
const PokeImg = styled.img`
  width: auto;
  height: 18rem;
  border: 0;
`;
const DivImg = styled.div`
  height: 100vh;
  width: 33.4%;

  display: flex;
  justify-content: center;
  align-items: center;
  &.fire {
    background: rgb(238, 129, 48);
    background: ${(props) => props.bg};
  }
  &.water {
    background: rgb(99, 144, 240);
    background: radial-gradient(
      circle,
      rgba(99, 144, 240, 1) 0%,
      rgba(99, 144, 240, 1) 35%,
      rgba(35, 105, 255, 1) 100%
    );
  }
  &.grass {
    background: rgb(122, 199, 76);
    background: radial-gradient(
      circle,
      rgba(122, 199, 76, 1) 0%,
      rgba(122, 199, 76, 1) 35%,
      rgba(81, 186, 18, 1) 100%
    );
  }
  /* background-color: ${(props) => props.backgroundColor}; */
`;
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getTypes());

    // dispatch(getPokemonByID(2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeContainer>
      <LinkLogo>
        <NavLink to="/pokemons" className="navlink">
          <PokeLogo src={pokeLogo} alt="pokeLogo" className="pokelogo" />
          {/* <button>Pokemons</button> */}
        </NavLink>
      </LinkLogo>
      <DivImg className={"grass"}>
        <PokeImg
          src={Bulbasaur}
          alt="Bulbasaur"
          // className={styles.homeContainer__img}
        />
      </DivImg>
      {/* <h1>'Landing'</h1> */}

      <DivImg bg={bg} className={"fire"}>
        <PokeImg
          src={Charmander}
          alt="Charmander"
          // className={styles.homeContainer__img}
        />
      </DivImg>
      <DivImg className={"water"}>
        <PokeImg
          src={Squirtle}
          alt="Squirtle"
          // className={styles.homeContainer__img}
        />
      </DivImg>
    </HomeContainer>
  );
}
