import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Pokemon API</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
