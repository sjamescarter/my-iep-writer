import React from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import DateCard from "./DateCard";

function Student({ studentList, onDelete, dueDates, setDueDates }) {
    const params = useParams();
    const student = [...studentList].find(student => student.id === parseInt(params.ID));
    const studentDates = [...dueDates].filter(date => date.studentNumber === student.studentNumber);

    return (
        <div>
            <h3>{student.firstName} {student.lastName}</h3>
            {studentDates.map(date => {
                return <DateCard key={date.id} date={date} student={student} setDueDates={setDueDates} />
            })}
            <br></br>
            <Button onClick={() => onDelete(student.id)} style={{ margin: "0 0 2em 0" }}>Delete</Button>
        </div>
    )
}

export default Student;