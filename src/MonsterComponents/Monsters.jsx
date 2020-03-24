import React from "react";
import { Row, Col, DropdownButton } from "react-bootstrap";

export default function Monsters(props) {
  return (
    <React.Fragment>
      <Row className="justify-content-end">
        <Col xs="4" md="4">
          <DropdownButton title="Dropdown">
            <MenuItem href="#books">Books</MenuItem>
            <MenuItem href="#podcasts">Podcasts</MenuItem>
            <MenuItem href="#">Tech I Like</MenuItem>
            <MenuItem href="#">About me</MenuItem>
            <MenuItem href="#addBlog">Add a Blog</MenuItem>
          </DropdownButton>
        </Col>
      </Row>
    </React.Fragment>
  );
}
