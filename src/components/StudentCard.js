import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    background: #FFCB77;
    border: none;
    border-radius: 1em;
    margin: .5em;
    padding: 1em;
`

function StudentCard({ student }) {
    return (
        <CardDiv>
            <h3>{student.firstName} {student.lastName}</h3>
            <p>Birthdate: {student.birthdate} 🎂</p>
            <p>IEP Meeting: {student.iepDate}</p>
        </CardDiv>
    );
}

export default StudentCard;