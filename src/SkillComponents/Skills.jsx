import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SkillSet from "./SkillSet";
import SkillDescription from "./SkillDescription";
import "./skill.css";
var config = require("../config.js");

export default function Skills() {
  const [skills, updateSkills] = useState([]);
  const [currentSkill, updateCurrentSkill] = useState([]);
  const [isVisible, updateIsVisible] = useState(false);
  const updateJumbotron = (skill) => {
    let button = document.getElementById("btn-skill-" + skill.id);
    let lastButton = document.getElementsByClassName("active")[0];
    if (lastButton) {
      lastButton.classList.remove("active");
    }
    if (button) {
      if (!button.classList.contains("active")) {
        button.classList.add("active");
      }
    }
    updateCurrentSkill(skill);
    if (!isVisible) updateIsVisible(true);
  }
  useEffect(() => {
    fetch(`${config.serverURL}/api/Skills`)
      .then(response => response.json())
      .then(json => {
        let skillFilters = [];
        let masterArray = [];
        for (let i = 0; i < json.length; i++) {
          if (skillFilters.indexOf(json[i].statistic.name) == -1)
            skillFilters.push(json[i].statistic.name);
        }
        for (let i = 0; i < skillFilters.length; i++) {
          let filteredSkills = [];
          for (let j = 0; j < json.length; j++) {
            if (json[j].statistic.name == skillFilters[i])
              filteredSkills.push(json[j]);
          }
          masterArray.push([skillFilters[i], filteredSkills]);
        }
        updateSkills(masterArray);
      });
  }, []);
  return (
    <React.Fragment>
      <Row className="justify-content-center text-center">
        <Col>
          <h1>Skills</h1>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col xs="5" sm="5" md="3">
          {skills.map((filter, index) => (
            <SkillSet key={index} skillFilter={filter} eventKey={index} updateCurrentSkill={updateJumbotron} />
          ))}
        </Col>
        <Col xs="6" sm="7" md="8">
          <SkillDescription skill={currentSkill} visible={isVisible} />
        </Col>
      </Row>
    </React.Fragment>
  );
}
