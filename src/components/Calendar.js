import React, { useState } from "react";
import DatesList from "./DatesList";
import SortBy from "./SortBy";
import { sortABC, sortIEP } from "./Sort";

function Calendar({ dueDates, studentList, setDueDates }) {
    const [sortBy, setSortBy] = useState('none');

    const sortedDueDates = sortBy === 'none' 
    ? dueDates
    : sortBy === 'name'
        ? sortABC()
        : sortIEP();
        
    return (
        <div>
            <h2>Calendar</h2>
            <SortBy sortBy={sortBy} setSortBy={setSortBy} />
            <DatesList dueDates={sortedDueDates} studentList={studentList} setDueDates={setDueDates} />
        </div>
    );
}

export default Calendar;