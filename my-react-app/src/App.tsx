import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setCount] = useState(0);
  const handleClicPreck = () => {
    setCount(pokemonIndex - 1)
  };
  const handleClickSuiv = () => {
    setCount(pokemonIndex + 1)
  };

  const pokemon = pokemonList[pokemonIndex];

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <nav>
        {
        /*{pokemonIndex > 0 ? <button type="button" onClick={handleClicPreck}>Précédent</button>:""}
        {pokemonIndex < pokemonList.length - 1 ? <button type="button" onClick={handleClickSuiv}>Suivant</button>:""}*/
        }
      </nav>
    </div>
  );
}

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default App;