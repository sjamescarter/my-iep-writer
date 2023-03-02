import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CalculateDate from "./CalculateDate";

const CardDiv = styled.div`
    background: #FFCB77;
    border: none;
    border-radius: 1em;
    display: block;
    margin: 0em;
    padding: 0 1em 1em;
    text-decoration: none;
`

const Heading = styled.h3`
    text-align: center;
`

const InnerDiv = styled.div`
    background: #FEF9EF;
    border-radius 0 0 .5em .5em;
    padding: .25em 1em .5em;
`

function StudentCard({ student }) {
    const history = useHistory();
    const birthdate = new Date(student.birthdate);
    const iepDate = new Date(student.iepDate);

    return (
        <CardDiv onClick={() => history.push(`/students/${student.id}`)}>
            <Heading>{student.firstName} {student.lastName}</Heading>
            <InnerDiv>
                <small>Birthdate: {birthdate.toDateString()} 🎂</small>
                <p>IEP Meeting: {iepDate.toDateString()}</p>
            </InnerDiv>
        </CardDiv>
    );
}

export { CardDiv };

export default StudentCard;