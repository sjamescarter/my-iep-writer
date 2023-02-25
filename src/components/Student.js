import React from "react";
import { useParams } from "react-router-dom";
import CalculateDate from "./CalculateDate";

function Student({ studentList, onDelete }) {
    const params = useParams();
    const student = studentList.find(student => student.id === parseInt(params.ID))

    return (
        <div>
            <h3>{student.firstName} {student.lastName}</h3>
            <p>IEP Meeting: {student.iepDate}</p>
            {student.dates.map(date => {
                    return (
                        <li key={student.studentNumber + date.days}>
                            {date.title}: {<CalculateDate iepDate={student.iepDate} days={date.days} />} 
                            <button>Complete</button>
                        </li>
                    )
            })}
            <br></br>
            <button>Edit</button>
            <button onClick={() => onDelete(student.id)}>Delete</button>
        </div>
    )
}

export default Student;