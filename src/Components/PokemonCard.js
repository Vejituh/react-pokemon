import React, { useState, useEffect } from "react";
import pokemonBackground from "../utils/pokemonTypesColours";

export default function PokemonCard({ name, url}) {
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

    return () => {
      setPokemon("");
    };
  }, [url]);


  return (
    <>
      {pokemon.id && (
        <section
          className="card__container"
          style={{
            backgroundColor: `#${
              pokemonBackground[pokemon.types[0].type.name]
            }`,
          }}
        >
          <header style={{textAlign: "end"}}>
            {pokemon.id < 10 ? (
              <h2>#00{pokemon.id}</h2>
            ) : pokemon.id < 100 ? (
              <h2>#0{pokemon.id}</h2>
            ) : (
              <h2>#{pokemon.id}</h2>
            )}
          </header>
          <article className="card__main">
            <div className="card__mainText">
              <h2>{`${name}`}</h2>
              <div className="card__type">
                {pokemon.types.map((type) => {
                  return (
                    <div className="card__pokemonType" key={type.type.name}>
                      {type.type.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <figure className="pokemons__imgContainer">
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt="Pokemon artwork"
              ></img>
            </figure>
          </article>
        </section>
      )}
    </>
  );
}
