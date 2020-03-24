import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./skill.css";
export default function SkillDescription(props) {
  if (props.visible) {
    return (
      <React.Fragment>
        <Jumbotron style={{ position: "sticky", top: "2%" }}>
          <h1 className="jumbo-skill-title">{props.skill.name}</h1>
          <div className="jumbo-skill-info">
            <div>
              <b>Name: </b>
              {props.skill.name}
            </div>
            <div>
              <b>Stat Type: </b>
              {props.skill.statistic.statisticCategory}
            </div>
            <div>
              <b>Description: </b>
              {props.skill.description}
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
}
