import React, { useState, useEffect } from "react";
import "./fumble.css";
import { Row, Col, Table } from "react-bootstrap";
var config = require("../config.js");

export default function FumbleTable(props)
{
    const [fumble, uFumble] = useState([]);

    useEffect(() => {
        fetch(`${config.serverURL}/api/Fumbles`)
        .then(response => response.json())
        .then(json => {
            uFumble(json);
        });
    }, []);

    return (
        <React.Fragment>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Roll</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {fumble.filter(f => f.fumbleType == props.fumbleType).map(fum => (
                        <tr>
                            <td>{fum.roll}</td>
                            <td>{fum.result}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </React.Fragment>
    )
}