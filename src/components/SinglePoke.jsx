import React from "react";
import { Link } from "react-router-dom";

import { Spinner, Button, Card } from "reactstrap";

class MonoPoke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="/pokedex">
          <Button color="warning">Back to pokedex!</Button>
        </Link>
      </div>
    );
  }
}

export default MonoPoke;
