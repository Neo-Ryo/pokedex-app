import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavPokeBar from "./NavPokeBar";
import PokeCaroussel from "./Home";
import Pokedex from "./Pokedex";

export default function MyRouter() {
  return (
    <Router>
      <NavPokeBar />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/random">
          <PokeCard />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Route exact path="/">
          <PokeCaroussel />
        </Route>
      </Switch>
    </Router>
  );
}

function PokeCard() {
  return <div>Random</div>;
}
