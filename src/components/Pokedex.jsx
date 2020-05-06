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

export default class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: [], isLoading: true, error: false };
    this.getPokemons = this.getPokemons.bind(this);
  }

  async getPokemons() {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0%22"
      );
      this.setState({ pokemons: res.data.results });
      console.log(this.state.pokemons);
    } catch (err) {
      this.setState({ error: true });
      console.log("error!");
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async getTheDetails() {}

  componentDidMount() {
    this.getPokemons();
  }

  render() {
    const { isLoading, error, pokemons } = this.state;
    if (isLoading) {
      return <Spinner color="warning" />;
    } else if (error) {
      return <Alert color="danger">An error as occured...</Alert>;
    }
    return (
      <Row style={{ minHeight: "100%" }}>
        {pokemons.map((pokemon) => (
          <Col xs="3">
            <Card>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{pokemon.name}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
