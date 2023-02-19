import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
    background: #227C9D;
    border-radius: 3em;
    color: #EBEBEB;
    margin: .5em;
    padding: .75em;
    text-decoration: none;
    width: 50px;
`

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