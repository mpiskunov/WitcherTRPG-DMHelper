import React from "react";
import { MDBListGroupItem } from "mdbreact";
import "./skill.css";

export default function SkillSet(props) {
  return (
    <React.Fragment>
      <MDBListGroupItem
        className="text-responsive-item"
        id={`btn-skill-${props.skill.id}`}
        onClick={() => props.updateCurrentSkill(props.skill)}
      >
        {props.skill.name}
      </MDBListGroupItem>
    </React.Fragment>
  );
}
