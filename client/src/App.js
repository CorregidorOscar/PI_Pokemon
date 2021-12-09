// import "./App.css";
import { GlobalStyle } from "./common/styles/GlobalStyle.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pokemons from "./pages/Pokemons";
import CreatePokemon from "./pages/CreatePokemon";
import PokemonDetails from "./pages/PokemonDetails";
import Error from "./common/components/Error.jsx";

import styled, { keyframes } from "styled-components";
import bg1 from "./assets/background/1.jpeg";
import bg2 from "./assets/background/2.jpeg";
import bg3 from "./assets/background/3.jpeg";
import bg4 from "./assets/background/4.jpeg";
import Background from "./common/components/Background.jsx";
function App() {
  return (
    // <div className="App">
    //   <h1>Henry Pokemon</h1>
    // </div>
    // <div className="App">
    <Container>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pokemons" element={<Pokemons />} />
        {/* <Route exact path="/pokemons" element={<Background />} /> */}
        <Route exact path="/pokemons/:id" element={<PokemonDetails />} />
        <Route exact path="/pokemons/create" element={<CreatePokemon />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <GlobalStyle /> */}
    </Container>
    // </div>
  );
}

const fade = keyframes`
  0%, 10%{
      background-image: url(${bg1})}
      15%,35% {
          background-image: url(${bg2})}
  40%,60% {
    background-image: url(${bg3})
  }
  65%, 85%{
    background-image: url(${bg4})
  }
  
  90%, 100%{
    background-image: url(${bg1})

  }
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: ${fade} 16s infinite;
`;

export default App;
