import React from "react";
import { Jumbotron } from "react-bootstrap";
export default function Spell(props) {
  if (props.visible) {
    return (
      <React.Fragment>
        <Jumbotron style={{position: "sticky", top: "2%"}}>
          <h1>{props.spell.name}</h1>
          <div>
            <b>Stamina Cost: </b>
            {props.spell.staminaCost}
          </div>
          <div>
            <b>Defense: </b>
            {props.spell.defense}
          </div>
          <div>
            <b>Range: </b>
            {props.spell.range}
          </div>
          <div>
            <b>Duration: </b>
            {props.spell.duration}
          </div>
          <div>
            <b>Effect: </b>
            {props.spell.effect}
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
  else{
      return <div></div>
  }
}
