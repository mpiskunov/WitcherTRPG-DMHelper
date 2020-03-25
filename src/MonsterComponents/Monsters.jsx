import React, { useState, useEffect } from "react";
import { Row, Col, Card, Table, CardDeck } from "react-bootstrap";
import "./monster.css";
var config = require("../config.js");

export default function Monsters(props) {
  const [currentMonster, updateCurrentMonster] = useState("Select a Monster");
  const [monsters, updateMonsters] = useState([]);

  const MonsterChangeHandler = e => {
    var monster = monsters.find(
      mon => mon.id == parseInt(e.currentTarget.value)
    );
    if (monster) {
      var m = currentMonster;
      debugger;
      updateCurrentMonster(monster);
    }
  };
  // Effect
  useEffect(() => {
    fetch(`${config.serverURL}/api/Monsters`)
      .then(response => response.json())
      .then(json => {
        updateMonsters(json);
      });
  }, []);

  return (
    <React.Fragment>
      <Row className="justify-content-end text-center pt-5">
        <Col md="6">
          <h3>{currentMonster.name}</h3>
        </Col>
        <Col xs="10" md="3">
          <select
            className="browser-default custom-select"
            defaultValue="0"
            onChange={MonsterChangeHandler}
          >
            <option value="0">Select Monster...</option>
            {monsters.map(mon => (
              <option key={mon.id} value={mon.id}>
                {mon.name}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      <Row className="justify-content-center text-center pt-5">
        <Col xs="10" md="4" lg="6">
          <Row className="justify-content-center text-center">
            <Col xs="4" lg="4">
              <Card>
                <Card.Header>Threat</Card.Header>
                <Card.Body>{currentMonster.threat}</Card.Body>
              </Card>
            </Col>
            <Col xs="4" lg="4">
              <Card>
                <Card.Header>Bounty</Card.Header>
                <Card.Body>
                  {currentMonster.bounty === undefined
                    ? ""
                    : currentMonster.bounty + " Crowns"}
                </Card.Body>
              </Card>
            </Col>
            <Col xs="4" lg="4">
              <Card>
                <Card.Header>Armor</Card.Header>
                <Card.Body>{currentMonster.armorValue}</Card.Body>
              </Card>
            </Col>
            <Col lg="12">
              <Row className="justify-content-end">
                <Col xs="6" lg="4" className="offset-lg-3">
                  <Card>
                    <Card.Header>
                      <Table striped bordered hover size="sm">
                        <tbody>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.int === undefined ? "" : "INT"}
                            </td>
                            <td>{currentMonster.int}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.ref === undefined ? "" : "REF"}
                            </td>
                            <td>{currentMonster.ref}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.dex === undefined ? "" : "DEX"}
                            </td>
                            <td>{currentMonster.dex}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.body === undefined ? "" : "BODY"}
                            </td>
                            <td>{currentMonster.body}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.spd === undefined ? "" : "SPD"}
                            </td>
                            <td>{currentMonster.spd}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.spd === undefined ? "" : "EMP"}
                            </td>
                            <td>{currentMonster.spd}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.emp === undefined ? "" : "CRA"}
                            </td>
                            <td>{currentMonster.emp}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.cra === undefined ? "" : "WILL"}
                            </td>
                            <td>{currentMonster.cra}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.luck === undefined ? "" : "LUCK"}
                            </td>
                            <td>{currentMonster.luck}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Header>
                  </Card>
                </Col>
                <Col xs="6" lg="4">
                  <Card>
                    <Card.Header>
                      <Table striped bordered hover size="sm">
                        <tbody>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.luck === undefined ? "" : "LUCK"}
                            </td>
                            <td>{currentMonster.luck}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.stun === undefined ? "" : "STUN"}
                            </td>
                            <td>{currentMonster.stun}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.leap === undefined ? "" : "LEAP"}
                            </td>
                            <td>{currentMonster.leap}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.sta === undefined ? "" : "STA"}
                            </td>
                            <td>{currentMonster.sta}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.enc === undefined ? "" : "ENC"}
                            </td>
                            <td>{currentMonster.enc}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.rec === undefined ? "" : "REC"}
                            </td>
                            <td>{currentMonster.rec}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.hp === undefined ? "" : "HP"}
                            </td>
                            <td>{currentMonster.hp}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.vigor === undefined
                                ? ""
                                : "VIGOR"}
                            </td>
                            <td>{currentMonster.vigor}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Header>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}
