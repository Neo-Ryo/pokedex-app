import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import PikaWallp from "./img/pikachi-wallp.jpg";
import Tortank from "./img/tortank.jpg";
import EvoMulti from "./img/evoli-drksdofthmn.jpg";
const items = [
  {
    src: Tortank,
    altText: "Tortank",
    caption: "Always been my fav!",
    header: "Water pokemons",
    key: "1",
  },
  {
    src: PikaWallp,
    altText: "Un pika",
    caption: "Pika pika!!",
    header: "Un pikachu?!",
    key: "2",
  },
  {
    src: EvoMulti,
    altText: "Evoli",
    caption: "Seuls les vrais connaissent la ref!",
    header: "Fan art musical",
    key: "3",
  },
];

const PokeCaroussel = () => <UncontrolledCarousel items={items} />;

export default PokeCaroussel;
