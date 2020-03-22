import React from "react";
import { Col, Row } from "react-bootstrap";
var config = require("./config.js");
class Weapon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weaponName: "",
      description: ""
    };
  }

  componentDidMount() {
    const value = this.props.weaponID;
    if (value > 0) {
      fetch(`${config.serverURL}/api/Weapons/${value}`)
        .then(res => res.json())
        .then(json => {
          this.setState({
            weaponName: json.name,
            description: json.description
          });
        });
    }
  }
  render() {
    return (
      <React.Fragment>
          <Row className="justify-content-center">
            <h1>{this.state.weaponName}</h1>
          </Row>
          <Row xs="12" className="justify-content-center">
            <Col cs="6">{this.state.description}</Col>
          </Row>
      </React.Fragment>
    );
  }
}
export default Weapon;
