import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeStyle = {
    background: "#2892B8",
}

function NavBar() {
    return(
        <div>
            <StyledNavLink to="/" exact activeStyle={activeStyle}>Dashboard</StyledNavLink>
            <StyledNavLink to="/calendar" activeStyle={activeStyle}>Calendar</StyledNavLink>
            <StyledNavLink to="/students" exact activeStyle={activeStyle}>Students</StyledNavLink>
            <StyledNavLink to="/students/new"activeStyle={activeStyle}>Add Student</StyledNavLink>
        </div>
    );
}

// Styles
const StyledNavLink = styled(NavLink)`
    background: #227C9D;
    border-radius: 1em;
    color: #FEF9EF;
    margin: 0 1em 0 0;
    padding: .75em;
    text-decoration: none;

    &:hover {
        background: #2892B8;
    }
`

export default NavBar;