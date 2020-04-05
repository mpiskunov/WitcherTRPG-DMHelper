import React, { useState, useEffect } from "react";
import "./critical.css";
import { Row, Col, Table } from "react-bootstrap";
var config = require("../config.js");

export default function CriticalsTable(props)
{
    const [criticals, ucriticals] = useState([]);

    useEffect(() => {
        fetch(`${config.serverURL}/api/CriticalTables`)
        .then(response => response.json())
        .then(json => {
            ucriticals(json);
        });
    }, []);

    return (
        <React.Fragment>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Roll</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Stabilized</th>
                        <th>Treated</th>
                    </tr>
                </thead>
                <tbody>
                    {criticals.filter(f => f.criticalWoundType == props.criticalWoundType).map(crit => (
                        <tr>
                            <td>{crit.roll}</td>
                            <td>{crit.effectTitle}</td>
                            <td>{crit.effectDescription}</td>
                            <td>{crit.stabilized}</td>
                            <td>{crit.treated}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </React.Fragment>
    )
}