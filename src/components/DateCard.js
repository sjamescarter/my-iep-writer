import React from "react";
import { calculateDate, calculateColor } from "./CalculateDate";
import styled from "styled-components";

const StyledLi = styled.li`
    border-radius: 1em;
    color: #FEF9EF;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    list-style-type: none;
    margin: 1em 0;
    padding: 1em;
`

const StyledButton = styled.button`
    background: #FEF9EF;
    border: none;
    border-radius: .75em;
    color: #36A9D3;
    padding: .75em;
    margin: 0 1em;

    &:hover {
        cursor: pointer;
        background: #17C3B2;
        color: #FEF9EF;
    }
`

function DateCard({ date, student }) {
    const {firstName, lastName, iepDate} = student;
    const color = date.completed ? "#17C3B2" : calculateColor(iepDate, date.days);

    return (
        <StyledLi style={{ background: color }}>
            <div>
                <em>{date.title}</em>
                <br></br>
                <small>{firstName} {lastName}</small>
            </div>
            <big>
                <strong>{calculateDate(iepDate, date.days).toDateString()}</strong>
            </big>
            <StyledButton style={{ color: color }}>
                <strong>Complete</strong>
            </StyledButton>
        </StyledLi>
    );
}

export default DateCard;