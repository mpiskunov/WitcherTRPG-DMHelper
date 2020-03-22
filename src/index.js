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
import SideNavBar from "./SideNav";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Container, Row, Col } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.css";

const routing = (
  <Router>
    <SideNavBar></SideNavBar>
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/DMMenu" component={DMMenu} />
    <Route path="/Loot" component={Loot} />
    <Route path="/Combat" component={Combat} />
    <Route path="/Weapon/:weaponID" component={Weapon} />

    {/* <Link to="/">Home</Link>
    <Link to="/DMMenu">DM Menu</Link>
    <Link to="/Loot">Loot Menu</Link> */}
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
