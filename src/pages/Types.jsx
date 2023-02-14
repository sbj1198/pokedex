import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Types = () => {
  const [types, setTypes] = useState([]);

  const getPokemonTypes = () => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((data) => {
        setTypes(data.results);
      });
  };

  useEffect(() => {
    getPokemonTypes();
  }, []);

  return (
    <>
      <div className="pokemon-cards-container">
        {types.map((type, i) => {
          return (
            <Link to={`/types/${type.name}`} style={{ textDecoration: "none" }}>
              <div className="pokemon-cards" key={i}>
                <h3>{type.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
