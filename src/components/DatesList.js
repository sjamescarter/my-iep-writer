import React from "react";
import DateCard from "./DateCard";

function DatesList({ dueDates, studentList }) {
    return (
        dueDates.map(date => {
            const student = studentList.find(student => student.studentNumber === date.studentNumber);

            if(date.completed === false) {
                return <DateCard key={date.id} date={date} student={student} />;
            }
        })
    );
}

export default DatesList;
