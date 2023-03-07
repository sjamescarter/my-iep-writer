import React from "react";
import DatesList from "./DatesList";

function Calendar({ dueDates, studentList, setDueDates }) {        
    const incompleteDates = [...dueDates].filter(date => date.completed === false);
    const completeDates = [...dueDates].filter(date => date.completed === true);

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