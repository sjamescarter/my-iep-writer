import React from "react";
import { useParams } from "react-router-dom";

function EditStudent({ studentList }) {
    const params = useParams();
    const student = studentList.find(student => student.id === parseInt(params.ID))

    return (
        <div>
            <h3>{student.firstName} {student.lastName}</h3>
        </div>
    );
}

export default EditStudent;