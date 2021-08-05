import React, { useState, useEffect } from "react";
import pokemonBackground from "../utils/pokemonTypesColours";
import Image from "./Image";

export default function PokemonCard({ name, url, src}) {
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
          <header
            style={{
              textAlign: "end",
              color: `${
                pokemon.types[0].type.name === "electric" ||
                pokemon.types[0].type.name === "ground" ||
                pokemon.types[0].type.name === "flying" ||
                pokemon.types[0].type.name === "steel" ||
                pokemon.types[0].type.name === "ice"
                  ? "black"
                  : "white"
              }`,
            }}
          >
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
              <h2
                style={{
                  color: `${
                    pokemon.types[0].type.name === "electric" ||
                    pokemon.types[0].type.name === "ground" ||
                    pokemon.types[0].type.name === "flying" ||
                    pokemon.types[0].type.name === "steel" ||
                    pokemon.types[0].type.name === "ice"
                      ? "black"
                      : "white"
                  }`,
                }}
              >{`${name}`}</h2>
              <div className="card__type">
                {pokemon.types.map((type) => {
                  return (
                    <div
                      style={{
                        color: `${
                          pokemon.types[0].type.name === "electric" ||
                          pokemon.types[0].type.name === "ground" ||
                          pokemon.types[0].type.name === "flying" ||
                          pokemon.types[0].type.name === "steel" ||
                          pokemon.types[0].type.name === "ice"
                            ? "black"
                            : "white"
                        }`,
                      }}
                      className="card__pokemonType"
                      key={type.type.name}
                    >
                      {type.type.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <figure className="pokemons__imgContainer">
                <Image src={src} id={pokemon.id} alt="Pokemon offical artwork" />
            </figure>
          </article>
        </section>
      )}
    </>
  );
}
