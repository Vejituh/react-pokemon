import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import Nav from "./Nav";

function CardList() {
  const [pokemon, setPokemon] = useState([]);
  const [generation, setGeneration] = useState("");
  const fetchBaseUrl = "https://pokeapi.co/api/v2/";
  const eventhandler = data => setGeneration(data)
  
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${fetchBaseUrl}pokemon${generation}`);
      const data = await response.json();
      setPokemon(data.results);
    };

    fetchPokemon();
  }, [generation,setGeneration]);

  if (pokemon) {
    return (
      <>
        <Nav onChange={eventhandler}/>
        <div className="cardList__container">
          {pokemon.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default CardList;
