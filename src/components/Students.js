import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import StudentList from "./StudentList";
import EditStudent from "./EditStudent";

function Students({ studentList }) {
    const match = useRouteMatch()

    return (
        <div>
            <h2>Students</h2>
            <Route exact path={match.url}>
                <StudentList studentList={studentList} />
            </Route>
            <Route exact path={`${match.url}/:ID`}>
                <EditStudent studentList={studentList} />
            </Route>
        </div>
    );
}

export default Students;