import React, { useState, useEffect } from "react";

export default function PokemonCard({ name, url }) {
  const [pokemon, setPokemon] = useState([]);
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
      <div>
        <h1>{`#${pokemon.id} ${name}`}</h1>
        {pokemon.types.length > 1 ? (
          pokemon.types.map((type) => {
            return <div key={type.type.name}>{type.type.name}</div>;
          })
        ) : (
          <div>{pokemon.types.[0].type.name}</div>
        )}
        <img src={pokemon.sprites.other.["official-artwork"].front_default} alt="Pokemon artwork"></img>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
