import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import StudentList from "./StudentList";
import Student from "./Student";
import SortBy from "./SortBy";
import { sortABC, sortIEP } from "./Sort";

function Students({ studentList, onDelete, dueDates }) {
    const [sortBy, setSortBy] = useState('none');
    const match = useRouteMatch()

    const sortedStudentList = sortBy === 'none' 
        ? studentList
        : sortBy === 'name'
            ? sortABC(studentList)
            : sortIEP(studentList);

    return (
        <div>
            <h2>Students</h2>
            <Route exact path={match.url}>
                <SortBy sortBy={sortBy} setSortBy={setSortBy}/>
                <StudentList studentList={sortedStudentList} />
            </Route>
            <Route exact path={`${match.url}/:ID`}>
                <Student studentList={studentList} onDelete={onDelete} dueDates={dueDates} />
            </Route>
        </div>
    );
}

export default Students;