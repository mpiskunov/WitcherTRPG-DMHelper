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
          <Table
            responsive
            striped
            bordered
            hover
            size="sm"
            style={{ marginBottom: "0px" }}
          >
            <thead>
              <tr className="text-center">
                <th style={{ width: "15%" }}>Name</th>
                <th style={{ width: "10%" }}>SP</th>
                <th style={{ width: "10%" }}>Rel.</th>
                <th style={{ width: "15%" }}>Avail.</th>
                <th style={{ width: "10%" }}>Slots</th>
                <th style={{ width: "10%" }}>E.V.</th>
                <th style={{ width: "15%" }}>Weight</th>
                <th style={{ width: "15%" }}>Cost</th>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#ccefef" }}>
                  Light
                </th>
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
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#00cdcd" }}>
                  Medium
                </th>
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
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#008c96" }}>
                  Heavy
                </th>
              </tr>
            </thead>
          </Table>
          <Table
            responsive
            striped
            bordered
            hover
            size="sm"
            style={{ borderTopStyle: "hidden" }}
          >
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
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>

        <Col lg="12" xs="10" sm="11">
          <div>
            <h2>Torso Armor</h2>
          </div>
          <hr></hr>
          <Table
            responsive
            striped
            bordered
            hover
            size="sm"
            style={{ marginBottom: "0px" }}
          >
            <thead>
              <tr className="text-center">
                <th style={{ width: "15%" }}>Name</th>
                <th style={{ width: "10%" }}>SP</th>
                <th style={{ width: "10%" }}>Rel.</th>
                <th style={{ width: "15%" }}>Avail.</th>
                <th style={{ width: "10%" }}>Slots</th>
                <th style={{ width: "10%" }}>E.V.</th>
                <th style={{ width: "15%" }}>Weight</th>
                <th style={{ width: "15%" }}>Cost</th>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#ccefef" }}>
                  Light
                </th>
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
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "Torso" &&
                    arm.armor.weightClassification == "Light"
                )
                .map(am => (
                  <tr key={am.id}>
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#00cdcd" }}>
                  Medium
                </th>
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
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "Torso" &&
                    arm.armor.weightClassification == "Medium"
                )
                .map(am => (
                  <tr>
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#008c96" }}>
                  Heavy
                </th>
              </tr>
            </thead>
          </Table>
          <Table
            responsive
            striped
            bordered
            hover
            size="sm"
            style={{ borderTopStyle: "hidden" }}
          >
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "Torso" &&
                    arm.armor.weightClassification == "Heavy"
                )
                .map(am => (
                  <tr>
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>

        <Col lg="12" xs="10" sm="11">
          <div>
            <h2>Arm Armor</h2>
          </div>
          <hr></hr>
          <Table
            responsive
            striped
            bordered
            hover
            size="sm"
            style={{ marginBottom: "0px" }}
          >
            <thead>
              <tr className="text-center">
                <th style={{ width: "15%" }}>Name</th>
                <th style={{ width: "10%" }}>SP</th>
                <th style={{ width: "10%" }}>Rel.</th>
                <th style={{ width: "15%" }}>Avail.</th>
                <th style={{ width: "10%" }}>Slots</th>
                <th style={{ width: "10%" }}>E.V.</th>
                <th style={{ width: "15%" }}>Weight</th>
                <th style={{ width: "15%" }}>Cost</th>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#ccefef" }}>
                  Light
                </th>
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
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "ArmArmor" &&
                    arm.armor.weightClassification == "Light"
                )
                .map(am => (
                  <tr key={am.id}>
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#00cdcd" }}>
                  Medium
                </th>
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
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "ArmArmor" &&
                    arm.armor.weightClassification == "Medium"
                )
                .map(am => (
                  <tr>
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#008c96" }}>
                  Heavy
                </th>
              </tr>
            </thead>
          </Table>
          <Table
            responsive
            striped
            bordered
            hover
            size="sm"
            style={{ borderTopStyle: "hidden" }}
          >
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "ArmArmor" &&
                    arm.armor.weightClassification == "Heavy"
                )
                .map(am => (
                  <tr>
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>

        <Col lg="12" xs="10" sm="11">
          <div>
            <h2>Leg Armor</h2>
          </div>
          <hr></hr>
          <Table
            responsive
            striped
            bordered
            hover
            size="sm"
            style={{ marginBottom: "0px" }}
          >
            <thead>
              <tr className="text-center">
                <th style={{ width: "15%" }}>Name</th>
                <th style={{ width: "10%" }}>SP</th>
                <th style={{ width: "10%" }}>Rel.</th>
                <th style={{ width: "15%" }}>Avail.</th>
                <th style={{ width: "10%" }}>Slots</th>
                <th style={{ width: "10%" }}>E.V.</th>
                <th style={{ width: "15%" }}>Weight</th>
                <th style={{ width: "15%" }}>Cost</th>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#ccefef" }}>
                  Light
                </th>
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
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "LegArmor" &&
                    arm.armor.weightClassification == "Light"
                )
                .map(am => (
                  <tr key={am.id}>
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#00cdcd" }}>
                  Medium
                </th>
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
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "LegArmor" &&
                    arm.armor.weightClassification == "Medium"
                )
                .map(am => (
                  <tr>
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#008c96" }}>
                  Heavy
                </th>
              </tr>
            </thead>
          </Table>
          <Table
            responsive
            striped
            bordered
            hover
            size="sm"
            style={{ borderTopStyle: "hidden" }}
          >
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "LegArmor" &&
                    arm.armor.weightClassification == "Heavy"
                )
                .map(am => (
                  <tr>
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>

        <Col lg="12" xs="10" sm="11">
          <div>
            <h2>Leg Armor</h2>
          </div>
          <hr></hr>
          <Table
            responsive
            striped
            bordered
            hover
            size="sm"
            style={{ marginBottom: "0px" }}
          >
            <thead>
              <tr className="text-center">
                <th style={{ width: "15%" }}>Name</th>
                <th style={{ width: "10%" }}>SP</th>
                <th style={{ width: "10%" }}>Rel.</th>
                <th style={{ width: "15%" }}>Avail.</th>
                <th style={{ width: "10%" }}>Slots</th>
                <th style={{ width: "10%" }}>E.V.</th>
                <th style={{ width: "15%" }}>Weight</th>
                <th style={{ width: "15%" }}>Cost</th>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#ccefef" }}>
                  Light
                </th>
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
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "Shield" &&
                    arm.armor.weightClassification == "Light"
                )
                .map(am => (
                  <tr key={am.id}>
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#00cdcd" }}>
                  Medium
                </th>
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
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "Shield" &&
                    arm.armor.weightClassification == "Medium"
                )
                .map(am => (
                  <tr>
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
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
                <th style={{ fontSize: "1.3em", backgroundColor: "#008c96" }}>
                  Heavy
                </th>
              </tr>
            </thead>
          </Table>
          <Table
            responsive
            striped
            bordered
            hover
            size="sm"
            style={{ borderTopStyle: "hidden" }}
          >
            <tbody>
              {allArmor
                .sort(s => s.id)
                .filter(
                  arm =>
                    arm.armorClassification == "Shield" &&
                    arm.armor.weightClassification == "Heavy"
                )
                .map(am => (
                  <tr>
                    <td style={{ width: "15%" }}>{am.armor.name}</td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.stoppingPower}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.defaultReliability}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.availability}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.enhancementSlots}
                    </td>
                    <td style={{ width: "10%" }} className="text-center">
                      {am.armor.encumberanceValue}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.weight}
                    </td>
                    <td style={{ width: "15%" }} className="text-center">
                      {am.armor.cost}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </React.Fragment>
  );
}
