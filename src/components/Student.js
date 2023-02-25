import React from "react";
import { useParams } from "react-router-dom";
import CalculateDate from "./CalculateDate";

function Student({ studentList, onDelete }) {
    const params = useParams();
    const student = studentList.find(student => student.id === parseInt(params.ID))

    return (
        <div>
            <h3>{student.firstName} {student.lastName}</h3>
            <button>Edit</button>
            <button onClick={() => onDelete(student.id)}>Delete</button>
        </div>
    )
}

export default Student;