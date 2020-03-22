import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { useHistory } from "react-router-dom";

import React from "react";

const SideNavBar = () => {
  const history = useHistory();
  return (
    <SideNav
      id="NavBar"
      onSelect={selected => {
        history.push(`/${selected}`);
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="/">
        <NavItem eventKey="">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <i
              className="fa fa-fw fa-line-chart"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>Combat</NavText>
          <NavItem eventKey="Combat/Cover">
            <NavText>Cover</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>Bar Chart</NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideNavBar;
