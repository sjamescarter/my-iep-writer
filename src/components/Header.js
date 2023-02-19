import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
    background: #227C9D;
    border-radius: 2em;
    color: #EBEBEB;
    margin: .5em;
    padding: .75em;
    text-decoration: none;
    width: 50px;
`

function Header() {
    return (
        <div>
            <h1>My IEP Writer</h1>
            <StyledNavLink to="/" exact>Home</StyledNavLink>
            <StyledNavLink to="/calendar">Calendar</StyledNavLink>
            <StyledNavLink to="/students">Students</StyledNavLink>
            <StyledNavLink to="/students/add">Add Student</StyledNavLink>
            <StyledNavLink to="/settings">Settings</StyledNavLink>
        </div>
    );
}

export default Header