import React, { useState, useEffect } from "react";
import { Row, Col, Card, Table, CardDeck } from "react-bootstrap";
import "./monster.css";
var config = require("../config.js");

export default function Monsters(props) {
  // monster object
  const [currentMonster, updateCurrentMonster] = useState("Select a Monster");
  // monster info object
  const [currentMonsterInfo, updateCurrentMonsterInfo] = useState([]);
  // all monster infos
  const [monsterInfo, updateMonsterInfo] = useState([]);
  // monster vulnerabilities
  const [currMonVulner, updateCurrMonVulner] = useState([]);
  // all monsters vulnerabilities
  const [monsterVulners, updateMonsterVulners] = useState([]);
  // monster abilities
  const [currMonAbilities, updateCurrMonAbilities] = useState([]);
  // all monsters abilities
  const [monsterAbilities, updateMonsterAbilities] = useState([]);
  // monster skills
  const [currMonSkills, updateCurrMonSkills] = useState([]);
  // all monsters skills
  const [monsterSkills, updateMonsterSkills] = useState([]);
  // monster loot
  const [currMonLoot, updateCurrMonLoot] = useState([]);
  // all monsters loots
  const [monsterLoots, updateMonsterLoots] = useState([]);
  // monster weapon
  const [currMonWeapon, updateCurrMonWeapon] = useState([]);
  // all monsters weapons
  const [monsterWeapons, updateMonsterWeapons] = useState([]);
  // all monsters
  const [monsters, updateMonsters] = useState([]);

  const MonsterChangeHandler = e => {
    // current monster
    var monster = monsters.find(
      mon => mon.id == parseInt(e.currentTarget.value)
    );
    if (monster) {
      var m = currentMonster;
      updateCurrentMonster(monster);
      debugger;
    }
    // current monster info
    var currMonInfo = monsterInfo.filter(
      mon => mon.monsterID == parseInt(e.currentTarget.value)
    );
    if (currMonInfo) {
      updateCurrentMonsterInfo(currMonInfo);
    }
    // current monster vulnerabilities
    var currMonVuln = monsterVulners.filter(
      mon => mon.monsterID == parseInt(e.currentTarget.value)
    );
    if (currMonVuln) {
      updateCurrMonVulner(currMonVuln);
    }
    // current monster abilities
    var currMonAbl = monsterAbilities.filter(
      mon => mon.monsterID == parseInt(e.currentTarget.value)
    );
    if (currMonAbl) {
      updateCurrMonAbilities(currMonAbl);
    }
    // current monster skills
    var currMonSkills = monsterSkills.filter(
      mon => mon.monsterID == parseInt(e.currentTarget.value)
    );
    if (currMonSkills) {
      updateCurrMonSkills(currMonSkills);
    }
    // current monster loots
    var currMonLoots = monsterLoots.filter(
      mon => mon.monsterID == parseInt(e.currentTarget.value)
    );
    if (currMonLoots) {
      updateCurrMonLoot(currMonLoots);
    }
    // current monster weapon
    var currMonWep = monsterWeapons.filter(
      mon => mon.monsterID == parseInt(e.currentTarget.value)
    );
    if (currMonWep) {
      updateCurrMonWeapon(currMonWep);
    }
  };

  // Effect - Monster Info
  useEffect(() => {
    fetch(`${config.serverURL}/api/Monsters`)
      .then(response => response.json())
      .then(json => {
        updateMonsters(json);
      });
  }, []);

  // Effect - Monster
  useEffect(() => {
    fetch(`${config.serverURL}/api/MonsterInformations`)
      .then(response => response.json())
      .then(json => {
        updateMonsterInfo(json);
      });
  }, []);

  // Effect - vulnerabilities
  useEffect(() => {
    fetch(`${config.serverURL}/api/MonsterVulnerabilities`)
      .then(response => response.json())
      .then(json => {
        updateMonsterVulners(json);
      });
  }, []);

  // Effect - vulnerabilities
  useEffect(() => {
    fetch(`${config.serverURL}/api/MonsterAbilities`)
      .then(response => response.json())
      .then(json => {
        updateMonsterAbilities(json);
      });
  }, []);

  // Effect - vulnerabilities
  useEffect(() => {
    fetch(`${config.serverURL}/api/MonsterSkills`)
      .then(response => response.json())
      .then(json => {
        updateMonsterSkills(json);
      });
  }, []);

  // Effect - vulnerabilities
  useEffect(() => {
    fetch(`${config.serverURL}/api/MonsterLoots`)
      .then(response => response.json())
      .then(json => {
        updateMonsterLoots(json);
      });
  }, []);

  // Effect - vulnerabilities
  useEffect(() => {
    fetch(`${config.serverURL}/api/MonsterWeapons`)
      .then(response => response.json())
      .then(json => {
        updateMonsterWeapons(json);
      });
  }, []);

  const CalculateSkill = (skill, monsterID) => {
    //  setTimeout(() => {
    //   var el = document.getElementById("td" + skill);
    //   var value = parseInt(el.innerHTML) + value;
       debugger;
    //   //document.getElementById("tdBase" + skill).innerHTML = "test";
    //  }, 500);
    var mon = monsters.find(monster => monster.id == monsterID)[skill.toLowerCase()];
    return mon;
  };

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
        <Col xs="9" md="8" lg="6">
          <Row className="justify-content-center text-center">
            <Col xs="12" lg="4">
              <Card>
                <Card.Header>Threat</Card.Header>
                <Card.Body>{currentMonster.threat}</Card.Body>
              </Card>
            </Col>
            <Col xs="12" lg="4">
              <Card>
                <Card.Header>Bounty</Card.Header>
                <Card.Body>
                  {currentMonster.bounty === undefined
                    ? ""
                    : currentMonster.bounty + " Crowns"}
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" lg="4">
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
                            <td id="tdINT">{currentMonster.int}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.ref === undefined ? "" : "REF"}
                            </td>
                            <td id="tdREF">{currentMonster.ref}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.dex === undefined ? "" : "DEX"}
                            </td>
                            <td id="tdDEX">{currentMonster.dex}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.body === undefined ? "" : "BODY"}
                            </td>
                            <td id="tdBODY">{currentMonster.body}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.spd === undefined ? "" : "SPD"}
                            </td>
                            <td id="tdSPD">{currentMonster.spd}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.spd === undefined ? "" : "EMP"}
                            </td>
                            <td id="tdEMP">{currentMonster.spd}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.emp === undefined ? "" : "CRA"}
                            </td>
                            <td id="tdCRA">{currentMonster.emp}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.cra === undefined ? "" : "WILL"}
                            </td>
                            <td id="tdWILL">{currentMonster.cra}</td>
                          </tr>
                          <tr>
                            <td className="table-data-header">
                              {currentMonster.luck === undefined ? "" : "LUCK"}
                            </td>
                            <td id="tdLUCK">{currentMonster.luck}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Header>
                  </Card>
                </Col>
                {/*First Table*/}
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
                {/*Second Table*/}
              </Row>
              {/*Stat Row*/}
            </Col>
          </Row>
        </Col>
        <Col xs="9" md="8" lg="6">
          <Row className=" text-center">
            <Col xs="12" lg="6">
              <Card>
                <Card.Header>
                  <Table striped bordered hover size="sm">
                    <tbody>
                      <tr>
                        <td className="table-data-header">
                          {currentMonster.height === undefined ? "" : "Height"}
                        </td>
                        <td>{currentMonster.height}</td>
                      </tr>
                      <tr>
                        <td className="table-data-header">
                          {currentMonster.weight === undefined ? "" : "Weight"}
                        </td>
                        <td>{currentMonster.weight}</td>
                      </tr>
                      <tr>
                        <td className="table-data-header">
                          {currentMonster.environment === undefined
                            ? ""
                            : "Environment"}
                        </td>
                        <td>{currentMonster.environment}</td>
                      </tr>
                      <tr>
                        <td className="table-data-header">
                          {currentMonster.intelligence === undefined
                            ? ""
                            : "Intelligence"}
                        </td>
                        <td>{currentMonster.intelligence}</td>
                      </tr>
                      <tr>
                        <td className="table-data-header">
                          {currentMonster.organization === undefined
                            ? ""
                            : "Organization"}
                        </td>
                        <td>{currentMonster.organization}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Header>
              </Card>
            </Col>
            <Col xs="12" lg="6">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Vulnerabilities</th>
                  </tr>
                </thead>
                <tbody>
                  {currMonVulner.map(v => (
                    <tr key={v.id}>
                      <td>{v.title}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col xs="12" lg="6">
              <Table striped bordered hover size="sm">
                <thead className="table-data-header">
                  <tr>
                    <th>Loot</th>
                  </tr>
                </thead>
                <tbody>
                  {currMonLoot.map(v => (
                    <tr key={v.id}>
                      <td>{v.description}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col xs="12" lg="6">
              <Table striped bordered hover size="sm">
                <thead className="table-data-header">
                  <tr>
                    <th>Abilities</th>
                  </tr>
                </thead>
                <tbody>
                  {currMonAbilities.map(v => (
                    <tr key={v.id}>
                      <td>{v.description}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col xs="12" lg="6">
              <Table striped bordered hover size="sm">
                <thead className="table-data-header">
                  <tr>
                    <th>Skills</th>
                    <th>Base</th>
                  </tr>
                </thead>
                <tbody>
                  {currMonSkills.map(v => (
                    <tr key={v.id}>
                      <td>
                        {v.skill.name} + {v.value}
                      </td>
                      <td id={`"tdBase${v.skill.statistic.statisticCategory}"`}>
                      {v.value + CalculateSkill(v.skill.statistic.statisticCategory, v.monsterID)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center text-center pt-5">
        {currentMonsterInfo.map(monInfo => (
          <Col xs="9" md="8" lg="10" key={monInfo.id}>
            <div className="data-header">{monInfo.title}</div>
            <div className="h-divider"></div>
            {monInfo.description}
            <br />
            <br />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
}
