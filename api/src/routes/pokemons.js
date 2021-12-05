const { Router } = require("express");
// const { Pokemon } = require("../db");
// const { v4: uuidv4 } = require("uuid");
const { PokemonController } = require("../controllers");

const router = Router();

router.get("/", PokemonController.getAllPokemons);
router.get("/:id", PokemonController.getByID);
// // router.get("/:name", PokemonController.getByName);
router.post("/", PokemonController.add);

// router.put("/:id", PokemonController.update);
router.delete("/:id", PokemonController.delete);
// const {
//   getAllPokemons,
//   getByID,
//   getByName,
//   addPokemon,
// } = require("../controllers/pokemon");

// const router = Router();

// router.get("/", getAllPokemons);
// router.get("/:id", getByID);
// router.get("/:name", getByName);
// router.post("/", addPokemon);

module.exports = router;
