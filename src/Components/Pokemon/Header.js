import React, { useState, useEffect } from "react";
import "./styling/Header.css";

function Header({ onChange }) {
  const [activeButton, setActiveButton] = useState("about");
  const [displayComponent, setDisplayComponent] = useState("AboutComp");

  useEffect(() => {
    if (onChange) {
      return onChange(displayComponent);
    }
  }, [displayComponent, onChange]);

  return (
    <>
      <header className="header__nav">
        <button
          className={activeButton === "about" ? "active" : "inactive"}
          onClick={() => {
            setActiveButton("about");
            setDisplayComponent("AboutComp");
          }}
        >
          About
        </button>
        <button
          className={activeButton === "stats" ? "active" : "inactive"}
          onClick={() => {
            setActiveButton("stats");
            setDisplayComponent("StatsComp");
          }}
        >
          Base Stats
        </button>
        <button
          className={activeButton === "evolution" ? "active" : "inactive"}
          onClick={() => {
            setActiveButton("evolution");
            setDisplayComponent("EvolutionComp");
          }}
        >
          Evolution
        </button>
        <button
          className={activeButton === "moves" ? "active" : "inactive"}
          onClick={() => {
            setActiveButton("moves");
            setDisplayComponent("MovesComp");
          }}
        >
          Moves
        </button>
      </header>
    </>
  );
}

export default Header;
