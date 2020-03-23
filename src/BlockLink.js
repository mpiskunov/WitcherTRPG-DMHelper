import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

const BlockLink = props => {
  const history = useHistory();

  let CardClickHandler = () => {
    history.push({
      pathname: props.url,
      state: {nav: props.nav}
    });
  };

  return (
    <Card onClick={CardClickHandler} style={{ height: "200px" }}>
      <Card.Body className="align-items-center d-flex justify-content-center">
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default BlockLink;
