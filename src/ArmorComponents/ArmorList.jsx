import React, { useState, useEffect } from "react";
import { Table, Col, Row } from "react-bootstrap";
import "./armor.css";
var config = require("../config.js");
export default function ArmorList() {
  const [allArmor, uArmors] = useState([]);

  useEffect(() => {
    fetch(`${config.serverURL}/api/ArmorCovers`)
      .then(response => response.json())
      .then(json => {
        uArmors(json);
      });
  }, []);

  return (
    <React.Fragment>
      <Row className="justify-content-end">
        <Col lg="12" xs="10" sm="11">
          <div>
            <h2>Head Armor</h2>
          </div>
          <hr></hr>
          <Table responsive striped bordered hover size="sm"  style={{ marginBottom: "0px"}}>
            <thead>
              <tr className="text-center">
                <th style={{width:"15%"}}>Name</th>
                <th style={{width:"5%"}}>SP</th>
                <th>Rel.</th>
                <th>Avail.</th>
                <th>Slots</th>
                <th>E.V.</th>
                <th>Weight</th>
                <th>Cost</th>
              </tr>
            </thead>
          </Table>
          <Table
           responsive
            striped
            bordered
            hover
            size="sm"
            style={{ marginBottom: "0px", borderTopStyle: "hidden" }}
          >
            <thead>
              <tr>
                <th>Light</th>
              </tr>
            </thead>
          </Table>
          <Table responsive striped bordered hover size="sm"  style={{ marginBottom: "0px",borderTopStyle: "hidden" }}>
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "Head" &&
                    arm.armor.weightClassification == "Light"
                )
                .map(am => (
                  <tr key={am.id}>
                    <td style={{width:"15%"}}>{am.armor.name}</td>
                    <td style={{width:"5%"}} className="text-center">{am.armor.stoppingPower}</td>
                    <td className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td className="text-center">{am.armor.availability}</td>
                    <td className="text-center">{am.armor.enhancementSlots}</td>
                    <td className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td className="text-center">{am.armor.weight}</td>
                    <td className="text-center">{am.armor.cost}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Table
           responsive
            striped
            bordered
            hover
            size="sm"
            style={{ marginBottom: "0px", borderTopStyle: "hidden" }}
          >
            <thead>
              <tr>
                <th>Medium</th>
              </tr>
            </thead>
          </Table>
          <Table
           responsive striped bordered hover size="sm"  style={{ marginBottom: "0px",borderTopStyle: "hidden" }}>
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "Head" &&
                    arm.armor.weightClassification == "Medium"
                )
                .map(am => (
                  <tr>
                    <td style={{width: "20%"}}>{am.armor.name}</td>
                    <td className="text-center">{am.armor.stoppingPower}</td>
                    <td className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td className="text-center">{am.armor.availability}</td>
                    <td className="text-center">{am.armor.enhancementSlots}</td>
                    <td className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td className="text-center">{am.armor.weight}</td>
                    <td className="text-center">{am.armor.cost}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Table
           responsive
            striped
            bordered
            hover
            size="sm"
            style={{ marginBottom: "0px", borderTopStyle: "hidden" }}
          >
            <thead>
              <tr>
                <th>Heavy</th>
              </tr>
            </thead>
          </Table>
          <Table  responsive striped bordered hover size="sm"  style={{ borderTopStyle: "hidden" }}>
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "Head" &&
                    arm.armor.weightClassification == "Heavy"
                )
                .map(am => (
                  <tr>
                    <td style={{width:"15%"}}>{am.armor.name}</td>
                    <td style={{width:"5%"}} className="text-center">{am.armor.stoppingPower}</td>
                    <td className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td className="text-center">{am.armor.availability}</td>
                    <td className="text-center">{am.armor.enhancementSlots}</td>
                    <td className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td className="text-center">{am.armor.weight}</td>
                    <td className="text-center">{am.armor.cost}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </React.Fragment>
  );
}
