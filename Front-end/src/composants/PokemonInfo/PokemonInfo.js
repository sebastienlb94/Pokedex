import "./PokemonInfo.css";

function PokemonInfo({ pokemonTarget, onClick }) {
  return (
    <div className="containerPokemonInfo">
      <div className="pokemonCardInfo">
        <div className="containerTopInfo">
          <div className="containerIDInfo"># {pokemonTarget.id}</div>
          <button className="closeButton" onClick={onClick}>
            X
          </button>
        </div>
        <div className="containerPokemonWhiteInfo">
          <div className="containerImagePokemonInfo">
            <img
              className="imagePokemonInfo"
              src={pokemonTarget.image}
              alt="image"
            ></img>
          </div>

          <div className="containerNamePokemonInfo">{pokemonTarget.name}</div>
        </div>
        {pokemonTarget.types.map((type) => (
          <div key={type} className="pokemonTargetTypes">
            {type}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonInfo;
