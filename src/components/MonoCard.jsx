import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";
import styles from "./css/MonoCard.module.css";

function PokeCard({ name, body, image, type }) {
  return (
    <Row xs="8">
      <Col></Col>
      <Col xs="4">
        <Card color="info" style={{ margin: 50 }}>
          <CardTitle className={styles.title}>{name}</CardTitle>

          <CardImg top width="100%" src={image} alt={name} />
          <CardBody>
            <CardSubtitle className={styles.type}>{type}</CardSubtitle>
            <CardText className={styles.description}>{body}</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col></Col>
    </Row>
  );
}
export default PokeCard;
