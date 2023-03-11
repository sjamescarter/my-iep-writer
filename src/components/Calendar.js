import React from "react";
import DatesList from "./DatesList";
import { sortDates } from "./sort";

function Calendar({ dueDates, studentList, setDueDates }) {        
    const incompleteDates = [...dueDates].filter(date => date.completed === false);
    const completeDates = sortDates([...dueDates].filter(date => date.completed === true), [...studentList])

    

    return (
        <div>
            <h2>Calendar</h2>
            <DatesList dueDates={incompleteDates} studentList={studentList} setDueDates={setDueDates} />
            <h2>Done! 😅</h2>
            <DatesList dueDates={completeDates} studentList={studentList} setDueDates={setDueDates} />
        </div>
    );
}

export default Calendar;