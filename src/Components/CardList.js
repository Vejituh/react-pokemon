import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function CardList() {
  const [pokemon, setPokemon] = useState([]);
  const fetchBaseUrl = "https://pokeapi.co/api/v2/";
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${fetchBaseUrl}pokemon?limit=151&offset=0`);
      const data = await response.json();
      setPokemon(data.results);
    };

    fetchPokemon();
  }, []);

  if (pokemon) {
    return (
      <div>
        {pokemon.map((pokemon) => {
          return <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />;
        })}
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default CardList;
