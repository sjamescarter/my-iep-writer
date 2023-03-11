import React from "react";
import DatesList from "./DatesList";
import { sortDates } from "./sort";

function Calendar({ heading, dueDates, studentList, setDueDates }) {        
    const incompleteDates = sortDates([...dueDates].filter(date => date.completed === false), [...studentList], true);
    const completeDates = sortDates([...dueDates].filter(date => date.completed === true), [...studentList]);

    return (
        <div>
            <h2>{heading}</h2>
            <h3>Deadlines 😬</h3>
            <DatesList dueDates={incompleteDates} studentList={studentList} setDueDates={setDueDates} />
            <h3>Done! 😅</h3>
            <DatesList dueDates={completeDates} studentList={studentList} setDueDates={setDueDates} />
        </div>
    );
}

export default Calendar;