import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <Div>
            <P>
                Copyright 2023 Stephen James Carter.
                <br></br>
                All rights reserved.
            </P>
            <P>Privacy Policy</P>
        </Div>
    );
}

// Styles
const Div = styled.div`
    background-color: #0F3543;
    height: 112px;
    padding: 1em;
    text-align: center;
`
const P = styled.p`
    color: #FEF9EF;
`
export default Footer;