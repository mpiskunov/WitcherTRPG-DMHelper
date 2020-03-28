import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
var config = require("../config.js");
export default function EffectList() {
  const [effects, updateEffects] = useState([]);
  useEffect(() => {
    fetch(`${config.serverURL}/api/Effects`)
      .then(response => response.json())
      .then(json => {
        updateEffects(json);
      });
  }, []);

  return (
      <Row className="justify-content-end pt-5">
          <Col xs="10" md="11" lg="12">
              <Table striped bordered hover size="sm">
                  <thead>
                      <tr>
                          <th>Effect</th>
                          <th>Description</th>
                      </tr>
                  </thead>
                  <tbody>
                      {effects.map(ef => (
                          <tr>
                      <td>{ef.name}</td>
                      <td>{ef.description}</td>
                          </tr>
                      ))}
                  </tbody>
              </Table>
          </Col>
      </Row>
  );
}
