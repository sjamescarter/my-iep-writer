import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background: #EBEBEB;
    border: none;
    border-radius: 1em;
    padding: 1em;

    &:hover {
        background: #2892B8;
        color: #FEF9EF;
        cursor: pointer;
    }
`

function Button({ onClick, children }) {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    );
}

export default Button;