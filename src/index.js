import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./css/NavBar.css";
import App from "./App";
import About from "./About";
import DMMenu from "./DMMenu";
import Weapon from "./Weapon";
import Loot from "./Loot";
import Combat from "./Combat";
import Spells from "./Spells/Spells";
import SideNavBar from "./SideNav";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import Cover from "./CombatComponents/Cover";
import { Container } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.css";

const routing = (
  <Router>
    <SideNavBar></SideNavBar>
    <Container>
       <Route exact path="/" component={App} />
      <Route path="/DMMenu" component={DMMenu} />
      <Route path="/Loot" component={Loot} />
      <Route exact path="/Combat" component={Combat} />
      <Route path="/Weapon/:weaponID" component={Weapon} />
      <Route exact path="/Combat/Cover" component={Cover} />
      <Route path="/Spells" component={Spells} />
    </Container>
   
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
