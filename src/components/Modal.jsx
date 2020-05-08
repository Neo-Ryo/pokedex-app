import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
  Alert,
} from "reactstrap";
import axios from "axios";

class PokeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      pokeInfo: [],
      loading: true,
      error: false,
    };
    this.getDetail = this.getDetail.bind(this);
  }
  //   const { className, pokemon } = props;

  //   const [modal, setModal] = useState(false);
  //   const [pokeInfo, setPokeInfo] = useState([]);
  //   const [loading, setLoading] = useState(true);

  async getDetail() {
    // const { id } = this.props.match.params;
    try {
      const res = await axios(
        `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`
      );
      this.setState({ pokeInfo: res.data.results });
      console.log(res.data.results, "modaal res");
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getDetail();
  }

  render() {
    const { pokeInfo, loading, modal, error } = this.state;
    const { className, isOpen, toggle, description, name } = this.props;
    if (loading) {
      return <Spinner color="warning" />;
    }
    if (error) {
      return <Alert color="danger">There has been a problem! Try again.</Alert>;
    }
    return (
      <div>
        <Button color="danger" onClick={toggle}>
          Details
        </Button>
        <Modal isOpen={isOpen} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>{name}</ModalHeader>
          <img src={pokeInfo.sprites.front_default} alt={name} />
          <ModalBody>{description}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PokeDetails;
