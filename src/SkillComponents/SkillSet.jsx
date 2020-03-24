import React from "react";
import { Col, Card, Accordion } from "react-bootstrap";
import Skill from "./Skill";
import { MDBListGroup } from "mdbreact";

export default function SkillSet(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.eventKey + 1} className="text-responsive">
          {props.skillFilter[0]}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.eventKey + 1}>
          <Card.Body>
            <MDBListGroup>
              {props.skillFilter[1].map((skill, index) => (
                <Skill key={index} skill={skill} updateCurrentSkill={props.updateCurrentSkill} />
              ))}
            </MDBListGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
