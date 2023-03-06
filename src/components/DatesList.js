import React from "react";
import DateCard from "./DateCard";

function DatesList({ dueDates, studentList, setDueDates }) {
    return (
        dueDates.map(date => {
            const student = studentList.find(student => student.studentNumber === date.studentNumber);
            return <DateCard key={date.id} date={date} student={student} setDueDates={setDueDates} />;
        })
    );
}

export default DatesList;
