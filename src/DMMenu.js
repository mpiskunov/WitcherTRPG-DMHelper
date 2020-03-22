import React from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
import { Redirect } from "react-router";
var config = require("./config.js");
class DMMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        columns: [
          {
            label: "ID",
            field: "id",
            sort: "asc"
          },
          {
            label: "Name",
            field: "name",
            sort: "asc"
          },
          {
            label: "Attack Type",
            field: "attackType",
            sort: "asc"
          }
        ],
        rows: [{ id: -1, name: null, attackType: null }]
      },
      url: "/",
      weaponID: -1,
      weaponName: "",
      weaponDescription: ""
    };
    this.FetchWeapons = this.FetchWeapons.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
  }

  componentDidMount() {
    this.FetchWeapons();
  }

  handleRowClick(e) {
    this.setState({
      weaponID: parseInt(e.currentTarget.cells[0].innerText),
      weaponName: e.currentTarget.cells[1].innerText,
      weaponDescription: e.currentTarget.cells[3].innerText
    });
  }

  FetchWeapons() {
    fetch(`${config.serverURL}/api/Weapons`)
      .then(res => res.json())
      .then(json => {
        var obj = [];
        for (var i = 0; i < json.length; i++) {
          obj.push({
            id: json[i].id,
            name: json[i].name,
            attackType: json[i].attackType,
            description: json[i].description,
            clickEvent: this.handleRowClick
          });
        }
        const data = {
          columns: [
            {
              label: "ID",
              field: "id",
              sort: "asc",
              width: 100
            },
            {
              label: "Name",
              field: "name",
              sort: "asc",
              width: 100
            },
            {
              label: "Attack Type",
              field: "attackType",
              sort: "asc",
              width: 100
            },
            {
              field: "description",
              attributes: { visibility: "hidden" }
            }
          ],
          rows: obj
        };
        this.setState({
          data,
          weaponName: json[0].name,
          weaponDescription: json[0].description
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <h1>{this.state.weaponName}</h1>
        </Row>
        <Row xs="12" className="justify-content-center">
          <Col cs="6">{this.state.weaponDescription}</Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="8" sm="9" md="9">
            <MDBDataTable
              striped
              hover
              bordered
              btn
              data={this.state.data}
              key={this.state.data.columns.id}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default DMMenu;
