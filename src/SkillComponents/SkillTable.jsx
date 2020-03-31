import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";

export default function SkillTable(props) {
  return (
    <React.Fragment>
      <Table striped bordered hover size="sm"  style={{ marginBottom: "0px"}}>
        <thead>
          <tr>
            <th style={{fontWeight: "bold"}}>{props.sName}</th>
          </tr>
        </thead>
      </Table>
      <Table striped bordered hover size="sm" style={{ borderTopStyle: "hidden" }}>
        <tbody>
          {props.skills.map(skill => (
            <tr>
              <td style={{ width: "80%" }}>{skill.name}</td>
              <td style={{ width: "20%" }}>
                {skill.statistic.statisticCategory}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
}
