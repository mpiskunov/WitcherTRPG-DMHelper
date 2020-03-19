import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
const Cover = props => {
  const [data, setData] = useState({ data: { columns: [], rows: [] } });

  useEffect(() => {
    fetch("https://192.168.0.74:5001/api/CommonCovers")
      .then(response => response.json())
      .then(json => {
        debugger;
        var obj = [];
        for (var i = 0; i < json.length; i++) {
          debugger;
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
  });

  return (
    <Container>
      <Row className="justify-content-center text-center">
        <Col md="4" sm="12">
          <h1>Combat Cover</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="4" sm="12">
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
    </Container>
  );
};
export default Cover;