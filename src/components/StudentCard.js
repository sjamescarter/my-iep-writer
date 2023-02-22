import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const CardDiv = styled.div`
    background: #FFCB77;
    border: none;
    border-radius: 1em;
    margin: .5em;
    padding: 1em;
    text-decoration: none;
`

function StudentCard({ student }) {
    const history = useHistory();

    return (
        <CardDiv onClick={() => history.push(`/students/${student.id}`)}>
            <h3>{student.firstName} {student.lastName}</h3>
            <p>Birthdate: {student.birthdate} 🎂</p>
            <p>IEP Meeting: {student.iepDate}</p>
        </CardDiv>
    );
}

export { CardDiv };

export default StudentCard;