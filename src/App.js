import React from "react";
import { Row, Col } from "react-bootstrap";
import BlockLink from "./BlockLink";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
                <br />
        <br />
        <br />
        <Row className="justify-content-center text-center">
          <Col xs="7" md="4">
            <BlockLink name="Weapons" url="/DMMenu"></BlockLink>
          </Col>
          <Col xs="7" md="4">
            <BlockLink name="Loot" url="/Loot"></BlockLink>
          </Col>
          <Col xs="7" md="4">
            <BlockLink name="Combat" url="/Combat"></BlockLink>
          </Col>
          <Col xs="7" md="4">
            <BlockLink name="Spells" url="/Spells"></BlockLink>
          </Col>
        </Row>
      </React.Fragment>

    );
  }
}
export default App;
