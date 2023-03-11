import React from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import Calendar from "./Calendar";

function Student({ studentList, onDelete, dueDates, setDueDates }) {
    const params = useParams();
    const student = [...studentList].find(student => student.id === parseInt(params.ID));
    const studentDates = [...dueDates].filter(date => date.studentNumber === student.studentNumber);

    return (
        <div>
            <Calendar 
                heading={student.firstName + " " + student.lastName}
                dueDates={studentDates} 
                studentList={[student]} 
                setDueDates={setDueDates} 
            />
            <br></br>
            <Button onClick={() => onDelete(student.id)} style={{ margin: "0 0 2em 0" }}>Delete</Button>
        </div>
    )
}

export default Student;