import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import Nav from "./Nav";

function CardList() {
  const [pokemon, setPokemon] = useState([]);
  const [generation, setGeneration] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchBaseUrl = "https://pokeapi.co/api/v2/";
  const eventhandler = (data) => setGeneration(data);

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../utils/official-artwork', true, /\.webp$/))

  const sortable =
    Object.values(images).sort((a, b) => a.default.split("/")[3].split(".")[0] - b.default.split("/")[3].split(".")[0]);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const response = await fetch(
        `${fetchBaseUrl}pokemon${generation ? generation : "?limit=151&offset=0"
        }`
      );
      const data = await response.json();
      setPokemon(data.results);
    };

    fetchPokemon();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [generation, setGeneration]);

  return (
    <>
      <Nav onChange={eventhandler} />
      {pokemon ? (
        <>
          <div className="center-on-page" style={{ display: loading ? "inline" : "none" }}>
            <div className="pokeball">
              <div className="pokeball__button"></div>
            </div>
          </div>
          <div
            style={{ display: loading ? "none" : "flex" }}
            className="cardList__container"
          >
            {pokemon.map((pokemon) => {
              return (
                <Link
                  key={pokemon.url.split("/")[6]}
                  to={`/pokemon/${pokemon.url.split("/")[6]}`}
                  style={{
                    textDecoration: "none",
                    display: loading ? "none" : "inline",
                  }}
                >
                  <PokemonCard
                    key={pokemon.url.split("/")[6]}
                    name={pokemon.name}
                    url={pokemon.url}
                    src={sortable[pokemon.url.split("/")[6] - 1].default}
                  />
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}

export default CardList;
