import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const CardDiv = styled.div`
    background: #FFCB77;
    border: none;
    border-radius: 1em;
    display: block;
    margin: 0;
    padding: 0 1em 1em;
    text-decoration: none;
    width: 275px;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
        cursor: pointer
    }
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
    const birthdate = new Date(student.birthdate.replace(/-/g, '\/'));
    const iepDate = new Date(student.iepDate.replace(/-/g, '\/'));

    return (
        <CardDiv onClick={() => history.push(`/students/${student.id}`)}>
            <Heading>{student.firstName} {student.lastName}</Heading>
            <InnerDiv>
                <p>
                    Birthdate 🎂: {birthdate.toDateString()}
                    <br></br>
                    IEP Meeting: {iepDate.toDateString()}
                </p>
            </InnerDiv>
        </CardDiv>
    );
}

export { CardDiv };

export default StudentCard;