import React from "react";
import { Route, Link } from "react-router-dom";
import Cover from "./CombatComponents/Cover";
const Combat = props => {
  //const [redirect, setRedirect] = useState(false);

  return (
    <div>
      <h1>Combat</h1>
      <Link to="/Combat/Cover">Click here for cover</Link>
      <Route path="/Combat/Cover" component={Cover} />
    </div>
  );
};
export default Combat;
