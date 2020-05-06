import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import PokeTitle from "./img/pokemon-title.png";
import styles from "./css/NavPokeBar.module.css";

const NavPokeBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="warning" light>
        <NavbarBrand href="/" className="mr-auto">
          <img
            className={styles.poketitle}
            src={PokeTitle}
            alt="pokemon title"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/pokedex">Pokedex</Link>
            </NavItem>
            <NavItem>
              <Link to="/random">Random Poke!</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavPokeBar;
