import React from "react";
import styled from "styled-components";

const Div = styled.div`
    background-color: #0F3543;
    height: 112px;
    padding: 1em;
    text-align: center;
`

function Footer() {
    return (
        <Div>
            <p style={{ color: "#FEF9EF" }}>
                Copyright 2023 Stephen James Carter.
                <br></br>
                All rights reserved.
            </p>
            <p style={{ color: "#FEF9EF" }}>Privacy Policy</p>
        </Div>
    );
}

export default Footer;