import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavPokeBar from "./NavPokeBar";
import PokeCaroussel from "./Home";
import Pokedex from "./Pokedex";
import RandomPoke from "./RandomPoke";
import MonoPoke from "./SinglePoke";

export default function MyRouter() {
  return (
    <Router>
      <NavPokeBar />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/random" component={RandomPoke} />

        <Route path="/pokemon/:pokeId" component={MonoPoke} />

        <Route path="/pokedex" component={Pokedex} />

        <Route exact path="/">
          <PokeCaroussel />
        </Route>
      </Switch>
    </Router>
  );
}
