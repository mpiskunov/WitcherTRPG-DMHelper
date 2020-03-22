import React, {useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import BlockLink from "./BlockLink";
import SelectedNavBar from "./site.js";
const Combat = props => {
  
  useEffect(() => {
    SelectedNavBar(["navCombat"]);
  });

  return (
    <React.Fragment>
        <Row className="justify-content-center text-center">
          <Col xs="4" md="8">
            <h1>Combat</h1>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row className="justify-content-center text-center">
          <Col xs="7" md="4">
            <BlockLink name="Cover" url="Combat/Cover"></BlockLink>
          </Col>
        </Row>
    </React.Fragment>
  );
};
export default Combat;
