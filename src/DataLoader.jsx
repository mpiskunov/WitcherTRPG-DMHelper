import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col } from "react-bootstrap";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import SelectedNavBar from "./site.js";
var config = require("./config.js");
export default function DataLoader(props) {
  const [data, setData] = useState({ data: { columns: [], rows: [] } });
  const [monsterName, setMonsterName] = useState([]);
  const [monsterLoot, setMonsterLoot] = useState([]);
  const [showModal, setModalShow] = useState(false);

  const toggleModal = () => {
    setModalShow(!showModal);
  }

  useEffect(() => {
    SelectedNavBar(["navLoot"]);
    fetch(`${config.serverURL}/api/Monsters`)
      .then(response => response.json())
      .then(json => {
        var obj = [];
        for (var i = 0; i < json.length; i++) {
          obj.push({
            id: json[i].id,
            name: json[i].name,
            clickEvent: e => {
              var monsterID = e.currentTarget.cells[0].innerText;
              fetch(
                `${config.serverURL}/api/monsterloots/monsterid/${monsterID}`
              )
                .then(response => response.json())
                .then(json => {
                  setMonsterName(json[0].monster.name);
                  setMonsterLoot(json);
                  //setModalShow();
                });
                toggleModal();
              //e.currentTarget.cells[0].innerText
            }
          });
        }
        const data = {
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
            }
          ],
          rows: obj
        };
        setData(data);
      });
  }, []); // << super important array

  return (
    <React.Fragment>
      <Row className="justify-content-center text-center">
        <Col xs="7" sm="10"><h1>Monster Loot Table</h1></Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="7" sm="10">
                <MDBDataTable 
        striped
        small
        hover
        bordered
        fixed
        entries={25}
      btn data={data} 
      noBottomColumns
            searching={false}
            displayEntries={false}
            // paging={false}
            sortable={false}
        />
        </Col>
      </Row>

        <MDBModal isOpen={showModal} toggle={toggleModal} centered>
        <MDBModalHeader toggle={toggleModal}>{monsterName}</MDBModalHeader>
          <MDBModalBody>
          <ul>
          {monsterLoot.map((loot, index) => (
            <li key={loot.id}>{loot.description}</li>
          ))}
        </ul>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggleModal}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
    </React.Fragment>
  );
}
