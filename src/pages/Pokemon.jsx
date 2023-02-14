import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  // const total = 1279;

  const prev = () => {
    setOffset(offset - 20);
  };

  const next = () => {
    setOffset(offset + 20);
  };

  const getPokemonData = () => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        offset === 0 ? 0 : offset
      }&limit=20`
    )
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  };

  useEffect(() => {
    getPokemonData();
  }, [offset]);

  return (
    <>
      <div className="pokemon-cards-container">
        {pokemons.map((pokemon, i) => {
          return (
            <Link
              to={`/pokemon/${pokemon.name}`}
              style={{ textDecoration: "none" }}
              key={i}
            >
              <div className="pokemon-cards">
                <h3>{pokemon.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="pagination">
        <div>
          <button onClick={prev} disabled={offset === 0}>
            Previous
          </button>
        </div>
        <div>
          <button onClick={next}>Next</button>
        </div>
      </div>
    </>
  );
};
