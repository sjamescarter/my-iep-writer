import React from "react";

function StudentCard({ student }) {
    return (
        <div style={{ border: "solid", margin: ".5em", padding: ".5em"}}>
            <h3>{student.firstName} {student.lastName}</h3>
            <p>Birthdate: {student.birthdate} 🎂</p>
            <p>IEP Meeting: {student.iepDate}</p>
        </div>
    );
}

export default StudentCard;