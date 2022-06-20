import { useEffect, useState } from 'react';
// components
import Card from './Card';
import Loading from './Loading';
import Pokeinfo from './Pokemon';

const Home = () => {
  // loading state
  const [loading, setLoading] = useState(true);
  // url state
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=4&offset=0');
  const [previousUrl, setPreviousUrl] = useState();
  const [nextUrl, setNextUrl] = useState();
  // data state
  const [pokemons, setPokemons] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState();
  const [pokemonName, setPokemonName] = useState('');

  const fetchPokemonData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setLoading(false);
      setNextUrl(data.next);
      setPreviousUrl(data.previous);

      fetchPokemons(data.results);
    } catch (error) {
      console.error(error);

      setLoading(false);
    }
  };

  const fetchPokemons = async (dataResults) => {
    dataResults.map(async (pokemon) => {
      try {
        const response = await fetch(pokemon.url);
        const data = await response.json();

        setPokemons((pokemonArray) => {
          pokemonArray = [...pokemonArray, data];
          pokemonArray.sort((a, b) => (a.id > b.id ? 1 : -1));

          return pokemonArray;
        });
      } catch (error) {
        console.error(error);
      }
    });
  };

  const fetchPokemonByName = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      const data = await response.json();

      setPokemonInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, [url]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchPokemonByName();
    }
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <>
      <div className="container">
        <h1>Listado de Pokemon</h1>
        <div className="search-container">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            onChange={(event) => setPokemonName(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-btn" onClick={fetchPokemonByName}>
            Catch!
          </button>
        </div>
        <div className="content-container">
          <div className="left-content">
            <Card pokemons={pokemons} pokemonInfo={(pokemon) => setPokemonInfo(pokemon)} />
          </div>
          <div className="right-content">
            <Pokeinfo pokemonInfo={pokemonInfo} />
          </div>
        </div>
        <div className="btn-group">
          {previousUrl && (
            <button
              onClick={() => {
                setPokemons([]);
                setUrl(previousUrl);
              }}
            >
              Atrás
            </button>
          )}
          {nextUrl && (
            <button
              onClick={() => {
                setPokemons([]);
                setUrl(nextUrl);
              }}
            >
              Siguiente
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
