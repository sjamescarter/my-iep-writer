import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
    background: ${({ isActive }) => isActive ? "#17C3B2" : "#227C9D"};
    border-radius: 1em;
    color: #EBEBEB;
    margin: .5em;
    padding: .75em;
    text-decoration: none;
    width: 50px;
`

let activeStyle = {
    background: "17C3B2",
    textDecoraton: "none"
}

function NavBar() {
    return(
        <div>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/calendar">Calendar</StyledNavLink>
            <StyledNavLink to="/students">Students</StyledNavLink>
            <StyledNavLink to="/students/add">Add Student</StyledNavLink>
            <StyledNavLink to="/settings">Settings</StyledNavLink>
        </div>
    );
}

export default NavBar