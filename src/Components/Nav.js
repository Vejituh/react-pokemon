import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";

export default function Nav({ onChange }) {
  const [generation, setGeneration] = useState("");
  const generations = [
    { label: "Generation I", value: "?limit=151&offset=0" },
    { label: "Generation II", value: "?limit=100&offset=151" },
    { label: "Generation III", value: "?limit=135&offset=251" },
    { label: "Generation IV", value: "?limit=107&offset=386" },
    { label: "Generation V", value: "?limit=156&offset=493" },
    { label: "Generation VI", value: "?limit=72&offset=649" },
    { label: "Generation VII", value: "?limit=88&offset=721" },
    { label: "Generation VIII", value: "?limit=89&offset=809" },
  ];

  const getGeneration = (event) => {
    setGeneration(event[0].value);
    return generation;
  };

  useEffect(() => {
    if (onChange) {
      onChange(generation);
    }
  }, [generation, onChange]);

  return (
    <nav className="nav">
      <header>
        <h1>Pokedex</h1>
      </header>
      <Select
        options={generations}
        onChange={getGeneration}
        separator={true}
        placeholder="Pick a Generation"
        role="Generation selector for Pokemon"
      />
    </nav>
  );
}
