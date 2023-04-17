import { useState } from "react";
import "./Pokemon.css";

function Pokemon({ pokemon, onClick }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="pokemonCard" onClick={onClick}>
      <div className="containerId">#{pokemon.id}</div>
      <div className="containerPokemonWhite">
        <div className="containerImagePokemon">
          <img
            className="imagePokemon"
            src={pokemon.image}
            alt={pokemon.name}
          />
        </div>
        <div className="containerNamePokemon">{pokemon.name}</div>
      </div>
      <div>
        <button
          className={`favoriteButton ${isFavorited ? "favorited" : ""}`}
          onClick={handleFavorite}
        >
          {isFavorited ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
}

export default Pokemon;
