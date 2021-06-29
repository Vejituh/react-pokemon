import "./App.css";
import CardList from "./Components/CardList";
import Pokemon from "./Components/Pokemon/Pokemon";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/">
        <CardList />
      </Route>
      <Route path="/pokemon/:id">
        <Pokemon />
      </Route>
    </>
  );
}

export default App;
