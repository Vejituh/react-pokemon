import React from "react";
import "./styling/About.css";

function About({ pokemon }) {
  return (
    <section className="about__section">
      <div className="about__headers">
        <p>Height</p>
        <p>Weight</p>
        <p>Abilities</p>
      </div>
      <div className="about__data">
        <p>{pokemon.height * 10} cm</p>
        <p>{pokemon.weight / 10} kg</p>
        <div>
          {pokemon.abilities.map((ability) => {
            return (
              <span key={ability.ability.name}>
                {ability.ability.name.includes("-")
                  ? ability.ability.name.split("-").join(" ")
                  : ability.ability.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
