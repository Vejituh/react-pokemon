import React from "react";
import "./styling/Stats.css";

function Stats({ pokemon }) {
  return (
    <section className="base-stats__section">
      <div className="base-stats__headers">
        {pokemon.stats.map((stat) => {
          if (stat.stat.name.includes("-")) {
            return (
              <p key={stat.stat.name}>{`Sp. ${
                stat.stat.name.split("-")[1]
              }`}</p>
            );
          }
          return <p key={stat.stat.name}>{stat.stat.name}</p>;
        })}
      </div>
      <div className="base-stats__data">
        {pokemon.stats.map((stat) => {
          return (
            <div
              key={stat.stat.name}
              style={{
                display: "flex",
              }}
            >
              <p className="stat__value">{stat.base_stat}</p>
              <div
                className="stat__bar"
                style={{
                  width: `calc(100 * (${stat.base_stat}% / 255))`,
                  backgroundColor: `${
                    stat.base_stat < 75
                      ? "#fb7777"
                      : stat.base_stat < 175
                      ? "#53c380"
                      : "#72ce96"
                  }`,
                  height: "5px",
                  placeSelf: "center",
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;
