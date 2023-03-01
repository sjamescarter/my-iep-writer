import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import StudentList from "./StudentList";
import Student from "./Student";
import Sort from "./Sort";

function Students({ studentList, onDelete }) {
    const [sortBy, setSortBy] = useState('none');
    const match = useRouteMatch()

    const nameSort = [...studentList].sort((a, b) => {
        const nameA = a.firstName.toUpperCase();
        const nameB = b.firstName.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    const iepSort = [...studentList].sort((a, b) => {
        const dateA = new Date(a.iepDate);
        const dateB = new Date(b.iepDate);
        return dateA - dateB
    });

    const sortedStudentList = sortBy === 'none' 
        ? studentList
        : sortBy === 'name'
            ? nameSort
            : iepSort;

    return (
        <div>
            <h2>Students</h2>
            <Sort sortBy={sortBy} setSortBy={setSortBy}/>
            <Route exact path={match.url}>
                <StudentList studentList={sortedStudentList} />
            </Route>
            <Route exact path={`${match.url}/:ID`}>
                <Student studentList={studentList} onDelete={onDelete} />
            </Route>
        </div>
    );
}

export default Students;