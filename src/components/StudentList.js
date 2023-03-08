import React from "react";
import StudentCard, { CardDiv } from "./StudentCard"
import { useHistory } from "react-router-dom";
import Button from "./Button";

function StudentList({ studentList }) {
    const history = useHistory();
    
    return (
        <div 
            style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr)", 
                columnGap: "2em",
                rowGap: "2em",
                margin: "2em 0" 
            }}
        >
            {studentList.map((student) => {
                return <StudentCard key={student.id} student={student} />
            })}
            
            <CardDiv 
                style={{ background: "#FDD899", textAlign: "center" }} 
                onClick={() => history.push("/students/new")}
            >
                <h3>Add New Student</h3>
                {/* <Button> + </Button> */}
            </CardDiv>
        </div>
    );
}

export default StudentList;