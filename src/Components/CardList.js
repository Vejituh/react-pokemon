import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import Nav from "./Nav";

function CardList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [generation, setGeneration] = useState("");
  const [maxIndex, setMaxIndex] = useState(21);
  const fetchBaseUrl = "https://pokeapi.co/api/v2/";
  const eventhandler = (data) => {
    setGeneration(data);
  };

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../utils/official-artwork", true, /\.webp$/)
  );

  const sortable = Object.values(images).sort(
    (a, b) =>
      a.default.split("/")[3].split(".")[0] -
      b.default.split("/")[3].split(".")[0]
  );

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        `${fetchBaseUrl}pokemon${
          generation ? generation : "?limit=151&offset=0"
        }`
      );
      const data = await response.json();
      setMaxIndex(21);
      return setPokemon(data.results);
    };

    fetchPokemon();
  }, [generation]);

  useEffect(() => {
    return setCurrentPokemon(pokemon.slice(0, maxIndex));
  }, [maxIndex, generation, pokemon]);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      let currentScrollPos = window.innerHeight + window.pageYOffset;
      if (document.querySelector(".cardList__container")) {
        let height = document.querySelector(
          ".cardList__container"
        ).clientHeight;
        if (height && currentScrollPos > height - 1000) {
          maxIndex < pokemon.length - 21
            ? setMaxIndex((prevState) => prevState + 21)
            : setMaxIndex(
                (prevState) => prevState + (pokemon.length - prevState)
              );
          return setCurrentPokemon(pokemon.slice(0, maxIndex));
        }
      }
    };
  }

  return (
    <>
      <Nav onChange={eventhandler} />
      <div className="cardList__container">
        {currentPokemon[0] ? (
          currentPokemon.map((pokemon) => {
            return (
              <>
                <Link
                  key={pokemon.url.split("/")[6]}
                  to={`/pokemon/${pokemon.url.split("/")[6]}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                    src={sortable[pokemon.url.split("/")[6] - 1].default}
                  />
                </Link>
              </>
            );
          })
        ) : (
          <h1>Loading!</h1>
        )}
      </div>
    </>
  );
}

export default CardList;
