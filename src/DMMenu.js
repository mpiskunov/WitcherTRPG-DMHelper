import React, { useState } from "react";
import { Button, Container, Table, ThemeProvider } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
import { Redirect } from "react-router";
import Weapon from "./Weapon";
class DMMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
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
          }
        ],
        rows: [{ id: -1, name: null, attackType: null }]
      },
      redirect: false,
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
    //this.setState({redirect: true, url: "/Weapon/" + e.currentTarget.cells[0].innerText});
    debugger;
    this.setState({
      weaponID: parseInt(e.currentTarget.cells[0].innerText),
      weaponName: e.currentTarget.cells[1].innerText,
      weaponDescription: e.currentTarget.cells[3].innerText
    });
  }

  FetchWeapons() {
    fetch("https://localhost:44395/api/Weapons")
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
    var weaponIDRender = this.state.weaponID;
    if (this.state.redirect) {
      return <Redirect push to={this.state.weaponID} />;
    }
    return (
      <Container>
        <div>
          <Container>
            <Row className="justify-content-center">
              <h1>{this.state.weaponName}</h1>
            </Row>
            <Row xs="12" className="justify-content-center">
              <Col cs="6">{this.state.weaponDescription}</Col>
            </Row>
          </Container>
        </div>
        <MDBDataTable
          striped
          hover
          bordered
          btn
          data={this.state.data}
          key={this.state.data.columns.id}
        />
      </Container>
    );
  }
}
export default DMMenu;
