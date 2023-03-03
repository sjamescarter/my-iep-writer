import React from "react";
import DatesList from "./DatesList";

function Calendar({ dueDates, studentList }) {
    return (
        <div>
            <h2>Calendar</h2>
            <DatesList dueDates={dueDates} studentList={studentList} />
        </div>
    );
}

export default Calendar;