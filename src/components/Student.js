import React from "react";
import { useParams } from "react-router-dom";
import DateCard from "./DateCard";

function Student({ studentList, onDelete, dueDates, setDueDates }) {
    const params = useParams();
    const student = studentList.find(student => student.id === parseInt(params.ID));
    const studentDates = dueDates.filter(date => date.studentNumber === student.studentNumber);

    function handleClick() {
        return <input type="text" value={student.firstName} />
    }
    
    return (
        <div>
            <h3 onClick={handleClick}>{student.firstName} {student.lastName}</h3>
            <small>IEP: {student.iepDate}</small>
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