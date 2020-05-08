import React from "react";
import axios from "axios";
import {
  Spinner,
  Alert,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      pokeDetails: [],
      modal: false,
      isLoading: true,
      error: false,
    };
    this.getPokemons = this.getPokemons.bind(this);
    this.toggle = this.toggle.bind(this);
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

  toggle() {
    this.setState({ modal: !this.state.modal });
    console.log(this.state.modal);
  }

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
        {pokemons.map((pokemon, id) => (
          <Col xs="3" style={{ margin: 20 }} key={id}>
            <Card>
              <CardBody>
                <CardTitle style={{ whiteSpace: "nowrap" }}>
                  {pokemon.name}
                </CardTitle>
                <Link to={`pokemon/${id}/`}>
                  <Button>Details</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
