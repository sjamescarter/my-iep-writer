import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Main = styled.div`
    background: #227C9D;
    display: block;
    height: 8em;
    margin: 0;
    padding: 0 1em 1em;
`
const Title = styled.h1`
    color: #FEF9EF;    
    margin: 0;
    padding: 1em 0;
`
function Header() {
    return (
        <Main>
            <Title>My IEP Writer</Title>
            <NavBar />
        </Main>
    );
}

export default Header;