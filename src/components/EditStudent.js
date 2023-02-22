import React from "react";
import { useParams } from "react-router-dom";

function EditStudent() {
    const params = useParams();

    return (<p>Hello! Student {params.ID}</p>);
}

export default EditStudent;