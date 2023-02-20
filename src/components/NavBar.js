import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
    background: #227C9D;
    border-radius: 1em;
    color: #FEF9EF;
    margin: .5em;
    padding: .75em;
    text-decoration: none;
    width: 50px;
`

const activeStyle = {
    background: "#2892B8"
}

function NavBar() {
    return(
        <div>
            <StyledNavLink to="/" exact activeStyle={activeStyle}>Home</StyledNavLink>
            <StyledNavLink to="/calendar" activeStyle={activeStyle}>Calendar</StyledNavLink>
            <StyledNavLink to="/students" exact activeStyle={activeStyle}>Students</StyledNavLink>
            <StyledNavLink to="/students/new"activeStyle={activeStyle}>Add Student</StyledNavLink>
            <StyledNavLink to="/settings"activeStyle={activeStyle}>Settings</StyledNavLink>
        </div>
    );
}

export default NavBar;