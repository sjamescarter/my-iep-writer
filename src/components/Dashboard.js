import React from "react";
import { calculateDate } from "./CalculateDate";
import DatesList from "./DatesList";
import StudentList from "./StudentList";

function Dashboard({ dueDates, studentList }) {
    const orderedDueDates = [...dueDates].sort((a, b) => {
        const dateA = new Date(calculateDate(studentList.find(student => student.studentNumber === a.studentNumber).iepDate, a.days));
        const dateB = new Date(calculateDate(studentList.find(student => student.studentNumber === b.studentNumber).iepDate, b.days));
        return dateA - dateB;
    });

    return (
        <div>
            <h2>Dashboard</h2>
            <div>
                <h3>Upcoming Due Dates</h3>
                <DatesList dueDates={orderedDueDates.slice(0, 3)} studentList={studentList} />
            </div>
            <br></br>
            <div>
                <h3>My Students</h3>
                <StudentList studentList={studentList} />
            </div>
        </div>
    );
}

export default Dashboard;