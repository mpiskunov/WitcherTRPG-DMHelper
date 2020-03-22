import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { useHistory } from "react-router-dom";
import SelectedNavBar from "./site.js";

import React from "react";

const SideNavBar = () => {
  const history = useHistory();
  return (
    <SideNav
      id="NavBar"
      onSelect={selected => {
        debugger;
        SelectedNavBar([selected.navID]);
        history.push(`${selected.eventKey}`);
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="/">
        <NavItem eventKey="/" id="navHome">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="/DMMenu"  id="navWeapon">
          <NavIcon>
            <i className="fas fa-bomb" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Weapons</NavText>
        </NavItem>
        <NavItem eventKey="/Loot" id="navLoot">
          <NavIcon>
            <i className="fas fa-hand-holding-usd" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Monster Loot</NavText>
        </NavItem>
        <NavItem eventKey="/Spells" id="navSpell">
          <NavIcon>
            <i className="fas fa-bolt" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Spells</NavText>
        </NavItem>
        <NavItem eventKey="/Combat" id="navCombat">
          <NavIcon>
            <i
              className="fas fa-fist-raised"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>Combat</NavText>
          <NavItem eventKey="/Combat/Cover" id="navCombatCover">
            <NavText>Cover</NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideNavBar;