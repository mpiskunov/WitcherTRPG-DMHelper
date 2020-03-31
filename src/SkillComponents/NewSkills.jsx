import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import SkillTable from "./SkillTable";
import "./skill.css";
var config = require("../config.js");

export default function Skills() {
  const [skills, updateSkills] = useState([]);
  //const [currentSkill, updateCurrentSkill] = useState([]);

  useEffect(() => {
    fetch(`${config.serverURL}/api/Skills`)
      .then(response => response.json())
      .then(json => {
        updateSkills(json);
      });
  }, []);
  return (
    <React.Fragment>
      <Row className="justify-content-center text-center">
        <Col>
          <h1>Skills</h1>
        </Col>
      </Row>
      <Row className="justify-content-end text-center">
        <Col xs="9" sm="9" md="3">
          <SkillTable
            sName="Intelligence"
            skills={skills.filter(
              skill => skill.statistic.statisticCategory == "INT"
            )}
          />
        </Col>
        <Col xs="9" sm="9" md="3">
          <SkillTable
            sName="Reflex"
            skills={skills.filter(
              skill => skill.statistic.statisticCategory == "REF"
            )}
          />
        </Col>
        <Col xs="9" sm="9" md="3">
          <SkillTable
            sName="Dexterity"
            skills={skills.filter(
              skill => skill.statistic.statisticCategory == "DEX"
            )}
          />

          <SkillTable
            sName="Body"
            skills={skills.filter(
              skill => skill.statistic.statisticCategory == "BODY"
            )}
          />
        </Col>

        <Col xs="9" sm="9" md="3">
          <SkillTable
            sName="Empathy"
            skills={skills.filter(
              skill => skill.statistic.statisticCategory == "EMP"
            )}
          />
        </Col>
        <Col xs="9" sm="9" md="3">
          <SkillTable
            sName="Crafting"
            skills={skills.filter(
              skill => skill.statistic.statisticCategory == "CRA"
            )}
          />
        </Col>
        <Col xs="9" sm="9" md="3">
          <SkillTable
            sName="Will"
            skills={skills.filter(
              skill => skill.statistic.statisticCategory == "WILL"
            )}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}
