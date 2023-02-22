import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import EditStudent from "./EditStudent";

function Students({ children }) {
    const match = useRouteMatch()

    return (
        <div>
            <h2>Students</h2>
            <Route exact path={match.url}>
                {children}
            </Route>
            <Route exact path={`${match.url}/:ID`}>
                <EditStudent  />
            </Route>
        </div>
    );
}

export default Students;