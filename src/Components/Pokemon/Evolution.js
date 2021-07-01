import { Link } from "react-router-dom";
import "./styling/Evolution.css";

function Evolution({ pokemon }) {
  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 20);
  };
  const spriteUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  const getEvoDetails = (obj) => {
    if (obj.chain.evolves_to.length > 1) {
      return (
        <>
          <Link
            to={`/pokemon/${obj.chain.species.url.split("/")[6]}`}
            key={obj.chain.species.url.split("/")[6]}
            onClick={refreshPage}
          >
            <div>
              <figure>
                <img
                  alt="pokemon"
                  src={`${spriteUrl}${obj.chain.species.url.split("/")[6]}.png`}
                ></img>
              </figure>
              <p>{obj.chain.species.name}</p>
            </div>
          </Link>
          {obj.chain.evolves_to.map((evo) => {
            return (
              <Link
                to={`/pokemon/${evo.species.url.split("/")[6]}`}
                key={evo.species.url.split("/")[6]}
                onClick={refreshPage}
              >
                <div>
                  <figure>
                    <img
                      alt="pokemon"
                      src={`${spriteUrl}${evo.species.url.split("/")[6]}.png`}
                    ></img>
                  </figure>
                  <p>{evo.species.name}</p>
                </div>
              </Link>
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
          <Link
            to={`/pokemon/${obj.chain.species.url.split("/")[6]}`}
            key={obj.chain.species.url.split("/")[6]}
            onClick={refreshPage}
          >
            <div>
              <figure>
                <img
                  alt="pokemon"
                  src={`${spriteUrl}${obj.chain.species.url.split("/")[6]}.png`}
                ></img>
              </figure>
              <p>{obj.chain.species.name}</p>
            </div>
          </Link>
          <Link
            to={`/pokemon/${obj.chain.evolves_to[0].species.url.split("/")[6]}`}
            key={obj.chain.evolves_to[0].species.url.split("/")[6]}
            onClick={refreshPage}
          >
            <div>
              <figure>
                <img
                  alt="pokemon"
                  src={`${spriteUrl}${
                    obj.chain.evolves_to[0].species.url.split("/")[6]
                  }.png`}
                ></img>
              </figure>
              <p>{obj.chain.evolves_to[0].species.name}</p>
            </div>
          </Link>
          <Link
            to={`/pokemon/${
              obj.chain.evolves_to[0].evolves_to[0].species.url.split("/")[6]
            }`}
            key={
              obj.chain.evolves_to[0].evolves_to[0].species.url.split("/")[6]
            }
            onClick={refreshPage}
          >
            <div>
              <figure>
                <img
                  alt="pokemon"
                  src={`${spriteUrl}${
                    obj.chain.evolves_to[0].evolves_to[0].species.url.split(
                      "/"
                    )[6]
                  }.png`}
                ></img>
              </figure>
              <p>{obj.chain.evolves_to[0].evolves_to[0].species.name}</p>
            </div>
          </Link>
        </>
      );
    } else if (
      obj.chain.evolves_to[0] &&
      !obj.chain.evolves_to[0].evolves_to[0]
    ) {
      return (
        <>
          <Link
            to={`/pokemon/${obj.chain.species.url.split("/")[6]}`}
            key={obj.chain.species.url.split("/")[6]}
            onClick={refreshPage}
          >
            <div>
              <figure>
                <img
                  alt="pokemon"
                  src={`${spriteUrl}${obj.chain.species.url.split("/")[6]}.png`}
                ></img>
              </figure>
              <p>{obj.chain.species.name}</p>
            </div>
          </Link>
          <Link
            to={`/pokemon/${obj.chain.evolves_to[0].species.url.split("/")[6]}`}
            key={obj.chain.evolves_to[0].species.url.split("/")[6]}
            onClick={refreshPage}
          >
            <div>
              <figure>
                <img
                  alt="pokemon"
                  src={`${spriteUrl}${
                    obj.chain.evolves_to[0].species.url.split("/")[6]
                  }.png`}
                ></img>
              </figure>
              <p>{obj.chain.evolves_to[0].species.name}</p>
            </div>
          </Link>
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
