const Card = ({ pokemons, pokemonInfo }) => {
  return (
    <>
      {pokemons?.map((pokemon) => {
        return (
          <div
            key={pokemon.id}
            className="card"
            onClick={() => pokemonInfo(pokemon)}
            data-testid="card-1"
          >
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
            <h3># {pokemon.id}</h3>
            <h2>{pokemon.name.replace(/^./, pokemon.name[0].toUpperCase())}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Card;
