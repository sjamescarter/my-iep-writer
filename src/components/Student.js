import React from "react";
import { useParams } from "react-router-dom";
import CalculateDate from "./CalculateDate";
import styled from "styled-components";

const StyledLi = styled.li`
    display: block;
    list-style-type: none;
    padding: .25em;
`

const StyledButton = styled.button`
    background: #FEF9EF;
    border: solid;
    border-color: #17C3B2;
    border-radius: 2em;
    padding: .5em;
    margin: 0 1em;
    color: #17C3B2;

    &:hover {
        cursor: pointer;
        background: #17C3B2;
        border-color: #17C3B2;
        color: #FEF9EF;
    }
`

function Student({ studentList, onDelete }) {
    const params = useParams();
    const student = studentList.find(student => student.id === parseInt(params.ID))

    function handleComplete() {
        
    }
    return (
        <div>
            <h3>{student.firstName} {student.lastName}</h3>
            <ul>
                {student.dates.map(date => {
                    if(date.completed === false){
                        return (
                            <StyledLi key={student.studentNumber + date.days}>
                                {date.title}: {<CalculateDate iepDate={student.iepDate} days={date.days} />} 
                                <StyledButton onClick={handleComplete}>Complete</StyledButton>
                            </StyledLi>
                        )
                    }
                })}
                <StyledLi>IEP Meeting: {student.iepDate}</StyledLi>
            </ul>
            <br></br>
            <button>Edit</button>
            <button onClick={() => onDelete(student.id)}>Delete</button>
        </div>
    )
}

export default Student;