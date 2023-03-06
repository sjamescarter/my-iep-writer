import React, { useState } from "react";
import DatesList from "./DatesList";
import SortBy from "./SortBy";
import { sortABC, sortIEP } from "./Sort";

function Calendar({ dueDates, studentList }) {
    const [sortBy, setSortBy] = useState('none');

    const sortedDueDates = sortBy === 'none' 
    ? dueDates
    : sortBy === 'name'
        ? sortABC(studentList)
        : sortIEP(studentList);
        
    return (
        <div>
            <h2>Calendar</h2>
            <SortBy sortBy={sortBy} setSortBy={setSortBy} />
            <DatesList dueDates={sortedDueDates} studentList={studentList} />
        </div>
    );
}

export default Calendar;