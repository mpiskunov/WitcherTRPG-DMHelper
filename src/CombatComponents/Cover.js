import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
import SelectedNavBar from "../site.js";
var config = require("../config.js");
const Cover = props => {
  const [data, setData] = useState({ data: { columns: [], rows: [] } });

  useEffect(() => {
    SelectedNavBar(["navCombat", "navCombatCover"]);
  fetch(`${config.serverURL}/api/CommonCovers`)
      .then(response => response.json())
      .then(json => {
        var obj = [];
        for (var i = 0; i < json.length; i++) {
          obj.push({
            name: json[i].description,
            SP: json[i].stoppingPower
          });
        }
        const data = {
          columns: [
            {
              label: "Name",
              field: "name"
            },
            {
              label: "SP",
              field: "SP"
            }
          ],
          rows: obj
        };
        setData(data);
      });
      
  }, []);

  return (
    <React.Fragment>
      <Row className="justify-content-center text-center">
        <Col md="8" sm="12">
          <h1>Combat Cover</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8" sm="12">
          <MDBDataTable
            striped
            small
            hover
            bordered
            fixed
            entries={100}
            data={data}
            noBottomColumns
            searching={false}
            displayEntries={false}
            paging={false}
            sortable={false}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Cover;
