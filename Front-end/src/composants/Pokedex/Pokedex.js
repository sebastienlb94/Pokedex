import { useEffect, useState } from "react";
import "./Pokedex.css";
import Pokemon from "../PokemonCard/Pokemon";
import PokemonInfo from "../PokemonInfo/PokemonInfo";

const API = {
  async loadPokemons() {
    const response = await fetch("http://localhost:3001/pokemons", {
      withCredentials: true,
      crossorigin: true,
    });
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const result = await response.json();
    return result;
  },
};

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokemonTarget, setPokemonTarget] = useState(null);

  useEffect(() => {
    API.loadPokemons()
      .then((result) => {
        setPokemons(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
  );

  return (
    <div>
      {!pokemonTarget && (
        <div>
          <div className="topContainer">
            <input
              value={searchPokemon}
              onChange={(e) => setSearchPokemon(e.target.value)}
              className="searchInput"
              placeholder="Rechercher un Pokémon..."
            ></input>
          </div>
          <div className="wrapperPokemon">
            {filteredPokemons.map((pokemon) => (
              <Pokemon
                key={pokemon.id}
                onClick={() => setPokemonTarget(pokemon)}
                pokemon={pokemon}
              />
            ))}
          </div>
        </div>
      )}
      {pokemonTarget && (
        <div>
          <PokemonInfo
            pokemonTarget={pokemonTarget}
            onClick={() => setPokemonTarget(null)}
          />
        </div>
      )}
    </div>
  );
}

export default Pokedex;
