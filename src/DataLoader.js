import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Container } from "react-bootstrap";
var config = require('./config.js');
export default function DataLoader() {
  const [data, setData] = useState({ data: { columns: [], rows: [] } });
  const [monsterName, setMonsterName] = useState([]);
  const [monsterLoot, setMonsterLoot] = useState([]);

  useEffect(() => {
    fetch(`${config.serverURL}/api/Monsters`)
      .then(response => response.json())
      .then(json => {
        var obj = [];
        for (var i = 0; i < json.length; i++) {
          obj.push({
            id: json[i].id,
            name: json[i].name,
            clickEvent: e => {
              var monsterID = e.currentTarget.cells[0].innerText;
              fetch(
                `${config.serverURL}/api/monsterloots/monsterid/${monsterID}`
              )
                .then(response => response.json())
                .then(json => {
                  setMonsterName(json[0].monster.name);
                  setMonsterLoot(json);
                });
              //e.currentTarget.cells[0].innerText
            }
          });
        }
        const data = {
          columns: [
            {
              label: "ID",
              field: "id",
              sort: "asc"
            },
            {
              label: "Name",
              field: "name",
              sort: "asc"
            }
          ],
          rows: obj
        };
        setData(data);
      });
  }, []); // << super important array

  return (
    <Container>
      <h1>{monsterName}</h1>
      <div>
        <ul>
          {monsterLoot.map((loot, index) => (
            <li key={loot.id}>{loot.description}</li>
          ))}
        </ul>
      </div>

      <MDBDataTable striped hover bordered btn data={data} />
    </Container>
  );
}
