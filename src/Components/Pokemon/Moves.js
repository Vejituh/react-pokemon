import React from "react";
import "./styling/Moves.css";

function Moves({ pokemon }) {
  return (
    <section className="moves__section">
      {pokemon.moves.length > 1 ? (
        pokemon.moves.map((move) => {
          return (
            <div key={move.move.name} className="move__container">
              <h5>{move.move.name}</h5>
              <p>lvl {move.version_group_details[0].level_learned_at}</p>
            </div>
          );
        })
      ) : (
        <p>No moves data found</p>
      )}
    </section>
  );
}

export default Moves;
