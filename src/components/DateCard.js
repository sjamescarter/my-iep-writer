import React from "react";
import CalculateDate from "./CalculateDate";
import styled from "styled-components";

const StyledLi = styled.li`
    background: #FE6D73;
    border-radius: 1em;
    color: #FEF9EF;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    list-style-type: none;
    margin: 1em 0;
    padding: 1em;
    text-align: justify;
    text-justify: inter-word;
`

const StyledButton = styled.button`
    background: #FEF9EF;
    border: none;
    border-radius: .75em;
    color: #FE6D73;
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

    return (
        <StyledLi>
            <div>
                <em>{date.title}</em>
                <br></br>
                <small>{firstName} {lastName}</small>
            </div>
            <big>
                <strong>{<CalculateDate iepDate={iepDate} days={date.days} />}</strong>
            </big>
            <StyledButton>
                <strong>Complete</strong>
            </StyledButton>
        </StyledLi>
    );
}

export default DateCard;