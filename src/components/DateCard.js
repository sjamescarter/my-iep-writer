import React from "react";
import { calculateDate, calculateColor } from "./calculate";
import styled from "styled-components";
import { patchRequest } from "./fetch";
import Button from "./Button";

const StyledLi = styled.li`
    border-radius: 1em;
    color: #FEF9EF;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    list-style-type: none;
    margin: 1em 0;
    padding: 1em;
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
            <Button 
                onClick={() => patchRequest("/dates", date.id, { completed: !date.completed }, setDueDates)} 
                style={{ 
                    background: "#FEF9EF",
                    color: color 
                }}
            >
                <strong>{date.completed ? "Done!" : "Complete"}</strong>
            </Button>
        </StyledLi>
    );
}

export default DateCard;