import React from "react";
import { calculateDate, calculateColor } from "./CalculateDate";
import styled from "styled-components";
import { patchRequest } from "./Fetch";

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

    }
`

function DateCard({ date, student, setDueDates }) {
    const {firstName, lastName, iepDate} = student;
    const dueDate = calculateDate(iepDate, date.days);
    const day = dueDate.getDay();
    const dayIs = day === 0
        ? "Sunday"
        : day === 1 
        ? "Monday"
        : day === 2
        ? "Tuesday"
        : day === 3
        ? "Wednesday"
        : day === 4
        ? "Thursday"
        : day === 5
        ? "Friday"
        : "Saturday"
    const color = date.completed ? "#36A9D3" : calculateColor(iepDate, date.days); 
    
    return (
        <StyledLi style={{ background: color }}>
            <div>
                <em>{date.title}</em>
                <br></br>
                <small>{firstName} {lastName}</small>
            </div>
            <strong style={{ fontSize: "1.25em" }}>{dayIs}, {dueDate.getMonth() + 1}/{dueDate.getDate()}/{dueDate.getFullYear()}</strong>
            <StyledButton 
                onClick={() => patchRequest("/dates", date.id, { completed: !date.completed }, setDueDates)} 
                style={{ color: color }}
            >
                <strong>{date.completed ? "Done!" : "Complete"}</strong>
            </StyledButton>
        </StyledLi>
    );
}

export default DateCard;