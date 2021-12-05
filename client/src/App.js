// import "./App.css";
import { GlobalStyle } from "./common/styles/GlobalStyle.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pokemons from "./pages/Pokemons";
import CreatePokemon from "./pages/CreatePokemon";
import PokemonDetails from "./pages/PokemonDetails";
import Error from "./common/components/Error.jsx";
function App() {
  return (
    // <div className="App">
    //   <h1>Henry Pokemon</h1>
    // </div>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pokemons" element={<Pokemons />} />
        <Route exact path="/pokemons/:id" element={<PokemonDetails />} />
        <Route exact path="/pokemons/create" element={<CreatePokemon />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      {/* <GlobalStyle /> */}
    </div>
  );
}

export default App;
