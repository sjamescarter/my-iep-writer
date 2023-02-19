import React from "react";
import styled from "styled-components";

const Div = styled.div`
    background-color: #EBEBEB;
    padding: .5em;
`

function Footer() {
    return (
        <Div>
            <p>
                Copyright 2023 Stephen James Carter.
                <br></br>
                All rights reserved.
            </p>
        </Div>
    )
}

export default Footer