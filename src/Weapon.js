import React from "react";
import { Container, Col, Row } from "react-bootstrap";
class Weapon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weaponName: "",
      description: ""
    };
  }

  componentDidMount() {
    debugger;
    const value = this.props.weaponID;
    if (value > 0) {
      fetch(`https://192.168.0.74:5001/api/Weapons/${value}`)
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
      <div>
        <Container>
          <Row className="justify-content-center">
            <h1>{this.state.weaponName}</h1>
          </Row>
          <Row xs="12" className="justify-content-center">
            <Col cs="6">{this.state.description}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Weapon;
