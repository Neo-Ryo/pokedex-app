import React from "react";
import { Col, Row } from "reactstrap";
import styles from "./css/Footer.module.css";
import ReactIcon from "./img/React-icon.svg";
import BootStrapIcon from "./img/bootstrap_logo.svg.png";
import PokeAPI from "./img/pokeapi-dark.png";

export default function Footer(props) {
  return (
    <div className={styles.main}>
      <Row>
        <Col style={{ margin: 20 }}>
          <img src={ReactIcon} alt="react" width="70" height="70" />
        </Col>
        <Col style={{ margin: 20 }}>
          <img src={BootStrapIcon} alt="bootstrap" width="70" height="70" />
        </Col>
        <Col style={{ margin: 20 }}>
          <img src={PokeAPI} alt="poke-api" width="70" height="70" />
        </Col>
      </Row>
      <Row>
        <Col style={{ color: "white", padding: 50 }}>Made by Ryo with love</Col>
      </Row>
    </div>
  );
}
