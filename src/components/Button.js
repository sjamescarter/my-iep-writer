import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background: #EBEBEB;
    border: none;
    border-radius: 1em;
    padding: 1em;
    min-width: 5em;

    &:hover {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
        cursor: pointer;
    }
`

// background: #2892B8;
// color: #FEF9EF;

function Button({ onClick, style, children }) {
    return (
        <StyledButton onClick={onClick} style={style} >{children}</StyledButton>
    );
}

export default Button;