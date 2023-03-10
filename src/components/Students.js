import React, { useState } from "react";
import StudentList from "./StudentList";
import SortBy from "./SortBy";
import { sortABC, sortIEP } from "./sort";

function Students({ studentList }) {
    const [sortBy, setSortBy] = useState('none');

    const sortedStudentList = sortBy === 'none' 
        ? studentList
        : sortBy === 'name'
            ? sortABC(studentList)
            : sortIEP(studentList);

    return (
        <div>
            <h2>Students</h2>
            <SortBy sortBy={sortBy} setSortBy={setSortBy}/>
            <StudentList studentList={sortedStudentList} />
        </div>
    );
}

export default Students;