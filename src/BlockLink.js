import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Redirect } from "react-router";

const BlockLink = props => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect push to={props.url} />;
  }

  let CardClickHandler = () => {
    setRedirect(true);
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
