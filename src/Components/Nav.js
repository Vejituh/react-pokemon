import React, { useState, useEffect } from "react";

export default function Nav({ onChange }) {
  const [generation, setGeneration] = useState("");
  const generations = {
    I: "?limit=151&offset=0",
    II: "?limit=100&offset=151",
    III: "?limit=135&offset=251",
    IV: "?limit=107&offset=386",
    V: "?limit=156&offset=493",
    VI: "?limit=72&offset=649",
    VII: "?limit=88&offset=721",
    VIII: "?limit=89&offset=809",
  };

  const getGeneration = (event) => {
    setGeneration(generations[event.target.textContent.split(" ")[1]]);
    return generation;
  };

  useEffect(() => {
    if (onChange) {
      onChange(generation);
    }
  }, [getGeneration, generation]);

  return (
    <nav className="nav">
      <h1>Pokedex</h1>
      <ul>
        <li onClick={getGeneration}>Generation I</li>
        <li onClick={getGeneration}>Generation II</li>
        <li onClick={getGeneration}>Generation III</li>
        <li onClick={getGeneration}>Generation IV</li>
        <li onClick={getGeneration}>Generation V</li>
        <li onClick={getGeneration}>Generation VI</li>
        <li onClick={getGeneration}>Generation VII</li>
        <li onClick={getGeneration}>Generation VIII</li>
      </ul>
    </nav>
  );
}
