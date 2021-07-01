import React, { useState, useEffect } from "react";
import "./styling/Moves.css";

function Moves({ pokemon }) {
  const [moves, setMoves] = useState([]);

  const getMoves = (moves) => {
    let arr = [];
    moves.forEach(function (move) {
      arr.push([
        move.move.name,
        move.version_group_details[0].level_learned_at,
      ]);
    });
    arr.sort(function (a, b) {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return a[1] < b[1] ? -1 : 1;
      }
    });
    return setMoves(arr);
  };

  useEffect(() => {
    getMoves(pokemon.moves);
  }, [pokemon.moves]);

  return (
    <section className="moves__section">
      {pokemon.moves.length > 1 ? (
        moves.map((move) => {
          return (
            <div key={move[0]} className="move__container">
              <h5>
                {move[0].includes("-") ? move[0].split("-").join(" ") : move[0]}
              </h5>
              <p>lvl {move[1]}</p>
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
