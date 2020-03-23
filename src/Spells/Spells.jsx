import React, { useState, useEffect } from "react";
import { Row, Col, Card, Jumbotron } from "react-bootstrap";
import SelectedNavBar from "../site.js";
import Spell from "./Spell";
import { MDBListGroup, MDBListGroupItem } from "mdbreact";
var config = require("../config.js");
export default function Spells(props) {
  const [noviceSpells, updateNoviceSpells] = useState([]);
  const [journeymanSpells, updateJourneymanSpells] = useState([]);
  const [masterSpells, updateMasterSpells] = useState([]);
  const [currentSpells, updateCurrentSpells] = useState([]);
  const [currentSpell, updateCurrentspell] = useState([]);
  const [isVisible, updateIsVisible] = useState(false);
  const [subHeader, updateSubHeader] = useState("");
  const ClickHandler = (e, spell) => {
    // let spellButtons = document.getElementsByClassName("spell-buttons");
    // debugger;
    let button = document.getElementById("btnSpell" + e);
    let lastButton = document.getElementsByClassName("active")[0];
    if (lastButton) {
      lastButton.classList.remove("active");
    }
    if (button) {
      if (!button.classList.contains("active")) {
        button.classList.add("active");
      }
    }
    updateCurrentspell(spell);
    if (!isVisible) updateIsVisible(true);
  };

  const SelectSpellTypes = (e, subHeader) => {
    if (e != currentSpells) {
      updateIsVisible(false);
      updateCurrentSpells(e);
      updateSubHeader(subHeader);
    }
  };

  //useEffect
  useEffect(() => {
    // Sets the active icon on the SideNav.
    SelectedNavBar(["navSpell"]);

    //Fetches Spells
    fetch(`${config.serverURL}/api/Spells`)
      .then(response => response.json())
      .then(json => {
        let nSpells = [];
        let jSpells = [];
        let mSpells = [];
        for (var i = 0; i < json.length; i++) {
          let spell = json[i];
          switch (spell.spellDifficultyClassification) {
            case "NoviceSpell":
              nSpells.push(spell);
              break;
            case "JourneymanSpell":
              jSpells.push(spell);
              break;
            case "MasterSpell":
              mSpells.push(spell);
              break;
          }
        }
        updateNoviceSpells(nSpells);
        updateJourneymanSpells(jSpells);
        updateMasterSpells(mSpells);
      });
  }, []);

  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <h1>Spells</h1>
      </Row>
      <Row className="justify-content-center text-center">
        <Col xs="8" md="2">
          <Card onClick={() => SelectSpellTypes(noviceSpells, "Novice Spells")}>
            <Card.Body>
              <Card.Title>Novice</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="8" md="2">
          <Card onClick={() => SelectSpellTypes(journeymanSpells, "Journeyman Spells")}>
            <Card.Body>
              <Card.Title>Journeyman</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="8" md="2">
          <Card onClick={() => SelectSpellTypes(masterSpells, "Master Spells")}>
            <Card.Body>
              <Card.Title>Master</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <Row classList="justify-content-center text-center">
        <Col xs="4"><h2>{subHeader}</h2></Col>
      </Row>
      <hr></hr>
      <Row className="justify-content-end text-center">
        <Col xs="4" sm="5" md="3">
          <MDBListGroup>
            {currentSpells.map(spell => (
              <MDBListGroupItem
                key={spell.id}
                className="spell-buttons"
                id={`btnSpell${spell.id}`}
                hover
                onClick={() => ClickHandler(spell.id, spell)}
              >
                {spell.name}
              </MDBListGroupItem>
            ))}
          </MDBListGroup>
        </Col>
        <Col xs="6" sm="7" md="8">
          <Spell spell={currentSpell} visible={isVisible} />
        </Col>
      </Row>
    </React.Fragment>
  );
}
