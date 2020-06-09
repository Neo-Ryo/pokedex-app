import React from "react";
import { Link } from "react-router-dom";
import { Spinner, Button, Alert } from "reactstrap";
import axios from "axios";
import PokeCard from "./MonoCard";
import styles from "./css/SinglePoke.module.css";

class MonoPoke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeName: "",
      pokeSprite: "",
      pokeDescription: "",
      pokeType: "",
      loading: true,
      error: false,
    };
    // this.getPokeDetails = this.getPokeDetails.bind(this);
    this.getPokeInfo = this.getPokeInfo.bind(this);
  }

  async getPokeInfo() {
    try {
      const [info, details] = await Promise.all([
        axios.get(
          `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokeId}/`
        ),
        axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${this.props.match.params.pokeId}/`
        ),
      ]);
      this.setState({
        pokeName: info.data.name,
        pokeSprite: info.data.sprites.front_default,
        pokeDescription: details.data.flavor_text_entries[5].flavor_text,
        pokeType: details.data.egg_groups[0].name,
      });
      console.log(
        this.state.pokeName,
        "nom",
        this.state.pokeSprite,
        "img",
        details.data.flavor_text_entries[5].flavor_text,
        "desc",
        this.state.pokeType,
        "type",
        "infoState"
      );
    } catch (err) {
      this.setState({ err });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getPokeInfo();
  }

  render() {
    const {
      loading,
      error,
      pokeName,
      pokeSprite,
      pokeType,
      pokeDescription,
    } = this.state;
    if (loading) {
      return <Spinner color="warning" />;
    }
    if (error) {
      return <Alert color="danger">Error mate... Retry!</Alert>;
    }
    return (
      <div className={styles.page}>
        <Link to="/pokedex">
          <Button color="danger" className={styles.text}>
            Back to pokedex!
          </Button>
        </Link>
        <PokeCard
        
          name={pokeName}
          body={pokeDescription}
          image={pokeSprite}
          type={pokeType}
        />
      </div>
    );
  }
}

export default MonoPoke;
