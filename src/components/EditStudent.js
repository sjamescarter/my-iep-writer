import React from "react";
import { useParams } from "react-router-dom";
import AddStudent from "./AddStudent";

function EditStudent({ studentList, api }) {
    const params = useParams();
    const student = studentList.find(student => student.id === parseInt(params.ID))

    return (
        <div>Hey Jude don't feel so bad...</div>
    );
}

export default EditStudent;