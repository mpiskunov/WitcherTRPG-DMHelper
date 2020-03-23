import React, { useState, useEffect } from "react";
import { Row, Col, Card, Jumbotron } from "react-bootstrap";
var config = require("../config.js");

export default function Skills() {
  const [skills, updateSkills] = useState([]);
  const [skillCatArray, updateSkillCatArray] = useState([]);
  useEffect(() => {
    fetch(`${config.serverURL}/api/Skills`)
      .then(response => response.json())
      .then(json => {
        debugger;
        //updateSkills(json);
        let arr = [];
        for (var i = 0; i < json.length; i++) {
          if (json[i].statistic.name == "Intelligence") arr.push(json[i]);
        }
        updateSkills(arr);
      });
  }, []);
  return (
    <React.Fragment>
      <Row className="justify-content-center text-center">
        <Col>
          <h1>Skills</h1>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row className="justify-content-center text-center">
        {skills.map(skill => (
          <Col xl="3">
            {skill.name} - {skill.statistic.name}
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
}
