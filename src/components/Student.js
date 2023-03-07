import React from "react";
import { useParams } from "react-router-dom";
import DateCard from "./DateCard";

function Student({ studentList, onDelete, dueDates, setDueDates }) {
    const params = useParams();
    const student = studentList.find(student => student.id === parseInt(params.ID));
    const studentDates = dueDates.filter(date => date.studentNumber === student.studentNumber);

    return (
        <div>
            <h3>{student.firstName} {student.lastName}</h3>
            {studentDates.map(date => {
                return <DateCard key={date.id} date={date} student={student} setDueDates={setDueDates} />
            })}
            <br></br>
            <button>Edit</button>
            <button onClick={() => onDelete(student.id)}>Delete</button>
        </div>
    )
}

export default Student;