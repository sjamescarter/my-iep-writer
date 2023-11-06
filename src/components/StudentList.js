import React from "react";
import StudentCard, { CardDiv } from "./StudentCard"
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function StudentList({ studentList }) {
    const history = useHistory();
    
    return (
        <Div>
            {studentList.map((student) => {
                return <StudentCard key={student.id} student={student} />
            })}
            
            <CardDiv 
                style={{ background: "#FDD899", textAlign: "center" }} 
                onClick={() => history.push("/students/new")}
            >
                <h3>Add New Student</h3>
            </CardDiv>
        </Div>
    );
}

// Styles
const Div = styled.div`
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(275px, 1fr)); 
    column-gap: 2em;
    row-gap: 2em;
    margin: 2em 0;
`
export default StudentList;