import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockLink from "./BlockLink";
class App extends React.Component {
  render() {
    return (
      <Container>
        <br />
        <br />
        <br />
        <Row className="justify-content-center text-center">
          <Col md="4">
            <BlockLink name="Weapons" url="/DMMenu"></BlockLink>
          </Col>
          <Col md="4">
            <BlockLink name="Loot" url="/Loot"></BlockLink>
          </Col>
          <Col md="4">
            <BlockLink name="Combat" url="/Combat"></BlockLink>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
