import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <h1>My IEP Writer</h1>
            <NavLink>Home</NavLink>
            <NavLink>Calendar</NavLink>
            <NavLink>Students</NavLink>
            <NavLink>New Student</NavLink>
            <NavLink>Settings</NavLink>
        </div>
    );
}

export default Header