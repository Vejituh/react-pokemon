import React from "react";
import "./styling/Evolution.css";

function Evolution({ pokemon }) {
  const spriteUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  const getEvoDetails = (obj) => {
    if (obj.chain.evolves_to.length > 1) {
      return (
        <>
          <div>
            <img
              alt="pokemon"
              src={`${spriteUrl}${obj.chain.species.url.split("/")[6]}.png`}
            ></img>
            <p>{obj.chain.species.name}</p>
          </div>
          {obj.chain.evolves_to.map((evo) => {
            return (
              <div>
                <img
                  alt="pokemon"
                  src={`${spriteUrl}${evo.species.url.split("/")[6]}.png`}
                ></img>
                <p>{evo.species.name}</p>
              </div>
            );
          })}
        </>
      );
    } else if (
      obj.chain.evolves_to.length === 1 &&
      obj.chain.evolves_to[0].evolves_to[0]
    ) {
      return (
        <>
          <div>
            <img
              alt="pokemon"
              src={`${spriteUrl}${obj.chain.species.url.split("/")[6]}.png`}
            ></img>
            <p>{obj.chain.species.name}</p>
          </div>
          <div>
            <img
              alt="pokemon"
              src={`${spriteUrl}${
                obj.chain.evolves_to[0].species.url.split("/")[6]
              }.png`}
            ></img>
            <p>{obj.chain.evolves_to[0].species.name}</p>
          </div>
          <div>
            <img
              alt="pokemon"
              src={`${spriteUrl}${
                obj.chain.evolves_to[0].evolves_to[0].species.url.split("/")[6]
              }.png`}
            ></img>
            <p>{obj.chain.evolves_to[0].evolves_to[0].species.name}</p>
          </div>
        </>
      );
    } else if (
      obj.chain.evolves_to[0] &&
      !obj.chain.evolves_to[0].evolves_to[0]
    ) {
      return (
        <>
          <div>
            <img
              alt="pokemon"
              src={`${spriteUrl}${obj.chain.species.url.split("/")[6]}.png`}
            ></img>
            <p>{obj.chain.species.name}</p>
          </div>
          <div>
            <img
              alt="pokemon"
              src={`${spriteUrl}${
                obj.chain.evolves_to[0].species.url.split("/")[6]
              }.png`}
            ></img>
            <p>{obj.chain.evolves_to[0].species.name}</p>
          </div>
        </>
      );
    } else {
      return <p>No evolution data available</p>;
    }
  };

  return (
    <section className="evolution__section">
      <div className="evolution__headers">{getEvoDetails(pokemon)}</div>
    </section>
  );
}

export default Evolution;
