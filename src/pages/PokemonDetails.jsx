import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PokemonDetails = () => {
  const { pokemon_name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({});

  const getPokemonDetails = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonDetails(data);
      });
  };

  useEffect(() => {
    getPokemonDetails();
  }, []);

  return (
    <div style={{ color: "black" }}>
      <div
        id="name"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
          justifyContent: "space-between",
        }}
      >
        <h3>{pokemonDetails.name}</h3>
        <span style={{ paddingRight: "20px", cursor: "pointer" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2550/2550223.png"
            alt=""
            width="35px"
            height="35px"
          />
        </span>
      </div>
      <div
        id="pok-id"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "red" }}>ID:</h4>
        <h4>{pokemonDetails.id}</h4>
      </div>
      <div
        id="base-exp"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "red" }}>Base Exprience:</h4>
        <h4>{pokemonDetails.base_experience}</h4>
      </div>
      <div
        id="type"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "red" }}>Type:</h4>
        <h4></h4>
      </div>
      <div
        id="hp"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "red" }}>HP:</h4>
        <h4></h4>
      </div>
      <div
        id="attack"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "red" }}>Attack:</h4>
        <h4></h4>
      </div>
      <div
        id="defence"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "red" }}>Defense:</h4>
        <h4></h4>
      </div>
      <div
        id="spcl-attack"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "red" }}>Special Attack:</h4>
        <h4></h4>
      </div>
      <div
        id="spcl-defense"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "red" }}>Special Defense:</h4>
        <h4></h4>
      </div>
      <div
        id="speed"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "red" }}>Speed:</h4>
        <h4></h4>
      </div>
      <div
        id="abilites"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "red" }}>Abilites:</h4>
        {pokemonDetails?.abilities?.map((data) => {
          return <h4>{data?.ability?.name}</h4>;
        })}
      </div>
      <div
        id="moves"
        style={{
          display: "flex",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "red" }}>Moves:</h4>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignSelf: "flex-start",
          }}
        >
          {pokemonDetails?.moves?.map((data) => {
            return <h4>{data?.move?.name}, </h4>;
          })}
        </div>
      </div>
      <div
        id="height"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "red" }}>Height:</h4>
        <h4>{pokemonDetails.height}</h4>
      </div>
      <div
        id="weight"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "red" }}>Weight:</h4>
        <h4>{pokemonDetails.weight}</h4>
      </div>
    </div>
  );
};
