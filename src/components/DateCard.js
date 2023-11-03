import React from "react";
import styled from "styled-components";
import { calculateDate, calculateColor } from "./calculate";
import { patchRequest } from "./fetch";
import Button from "./Button";

function DateCard({ date, student, setDueDates }) {
    const { firstName, lastName, iepDate } = student;
    const dueDate = calculateDate(iepDate, date.days);
    const dayId = dueDate.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const color = date.completed ? "#36A9D3" : calculateColor(iepDate, date.days); 

    return (
        <StyledLi style={{ background: color }}>
            <div>
                <strong>
                    <em>{date.title}</em>
                </strong>
                <br></br>
                <small>{firstName} {lastName}</small>
            </div>
            <strong style={{ fontSize: "1.25em" }}>
                {days[dayId]}, {dueDate.getMonth() + 1}/{dueDate.getDate()}/{dueDate.getFullYear()}
            </strong>
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

// Styles
const StyledLi = styled.li`
    border-radius: 1em;
    color: #FEF9EF;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    list-style-type: none;
    margin: 1em 0;
    padding: 1em;
`

export default DateCard;