import React, { useState, useEffect } from "react";

export default function PokemonCard({ name, url }) {
  const [pokemon, setPokemon] = useState([]);
  const pokemonBackground = {
    normal: "A8A878",
    fighting: "C03028",
    flying: "A890F0",
    poison: "A040A0",
    ground: "E0C068",
    rock: "B8A038",
    bug: "A8B820",
    ghost: "705898",
    steel: "B8B8D0",
    fire: "F08030",
    water: "6890F0",
    grass: "78C850",
    electric: "F8D030",
    psychic: "F85888",
    ice: "98D8D8",
    dragon: "7038F8",
    dark: "705848",
    fairy: "EE99AC",
    unknown: "68A090",
    shadow: "604E82",
  };
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemon();
  }, [url]);

  if (pokemon.id) {
    return (
      <div
        className="card__container"
        style={{
          backgroundColor: `#${pokemonBackground[pokemon.types[0].type.name]}`,
        }}
      >
        {pokemon.id < 10 ? (
          <p>#00{pokemon.id}</p>
        ) : pokemon.id < 100 ? (
          <p>#0{pokemon.id}</p>
        ) : (
          <p>#{pokemon.id}</p>
        )}
        <div className="card__main">
          <div className="card__mainText">
            <h5>{`${name}`}</h5>
            <div className="card__type">
              {pokemon.types.length > 1 ? (
                pokemon.types.map((type) => {
                  return <div className="card__pokemonType" key={type.type.name}>{type.type.name}</div>;
                })
              ) : (
                <div className="card__pokemonType">{pokemon.types[0].type.name}</div>
              )}
            </div>
          </div>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="Pokemon artwork"
          ></img>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
