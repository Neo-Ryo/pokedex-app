import React from "react";
import axios from "axios";
import {
  Spinner,
  Alert,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import styles from "./css/Random.module.css";

export default class RandomPoke extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: [], isLoading: true, error: false };
    this.getRandomPokemon = this.getRandomPokemon.bind(this);
  }

  async getRandomPokemon() {
    const random = Math.floor(Math.random() * Math.floor(150));
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${random}`
      );
      this.setState({ pokemon: res.data });
      console.log(res);
    } catch (err) {
      this.setState({ error: true });
      console.log("error!");
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getRandomPokemon();
  }

  render() {
    const { isLoading, error, pokemon } = this.state;
    if (isLoading) {
      return <Spinner color="primary" />;
    } else if (error) {
      return <Alert color="danger">An error as occured...</Alert>;
    }
    return (
      <Row className={styles.backgrd}>
        <Col
          lg="3"
          xs="12"
          md={{ size: 4, offset: 4 }}
          style={{ marginTop: 50 }}
        >
          <Card>
            <CardImg
              top
              width="100%"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
            <CardBody>
              <CardTitle>{pokemon.name}</CardTitle>

              <Button onClick={this.getRandomPokemon}>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
