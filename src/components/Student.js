import React from "react";
import { useParams } from "react-router-dom";
import DatesList from "./DatesList";

function Student({ studentList, onDelete, dueDates }) {
    const params = useParams();
    const student = studentList.find(student => student.id === parseInt(params.ID))

    return (
        <div>
            <h3>{student.firstName} {student.lastName}</h3>
            {/* <DatesList dueDates={dueDates} studentList={student} /> */}
            <br></br>
            <button>Edit</button>
            <button onClick={() => onDelete(student.id)}>Delete</button>
        </div>
    )
}

export default Student;