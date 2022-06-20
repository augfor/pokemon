const Pokemon = ({ pokemonInfo }) => {
  return (
    <>
      {!pokemonInfo ? (
        ''
      ) : (
        <>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonInfo.id}.svg`}
            alt={pokemonInfo.name}
          />
          <h3># {pokemonInfo.id}</h3>
          <h2>{pokemonInfo.name.replace(/^./, pokemonInfo.name[0].toUpperCase())}</h2>
          <div className="pokemon-info">
            <h3>Types</h3>
            <h5>{pokemonInfo.types.map((type) => `${type.type.name} `)}</h5>
            <h3>Peso</h3>
            <h5>{pokemonInfo.weight} kg</h5>
            <h3>Sprites</h3>
            <div>
              <img src={pokemonInfo.sprites.front_default} alt="" />
              <img src={pokemonInfo.sprites.back_default} alt="" />
              <img src={pokemonInfo.sprites.front_shiny} alt="" />
              <img src={pokemonInfo.sprites.back_shiny} alt="" />
            </div>
            <h3>Movimientos</h3>
            <h6>{pokemonInfo.moves.slice(0, 8).map((move) => `${move.move.name} `)}</h6>
          </div>
        </>
      )}
    </>
  );
};

export default Pokemon;
