import React from "react";
import axios from "axios";
import {
  Spinner,
  Alert,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
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
    const { pokemon } = this.state;
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
        <Col xs="3" md={{ size: 3, offset: 4 }} style={{ marginTop: 50 }}>
          <Card>
            <CardImg
              top
              width="100%"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
            <CardBody>
              <CardTitle>{pokemon.name}</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button onClick={this.getRandomPokemon}>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
