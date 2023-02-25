import React from "react";
import CalculateDate from "./CalculateDate";
import StudentList from "./StudentList";

function Dashboard({ studentList }) {
    return (
        <div>
            <h2>Dashboard</h2>
            {studentList.map(student => {
                return (student.dates.map(date => {
                    return (
                        <li key={student.studentNumber + date.days}>
                            {student.firstName} {student.lastName}'s {date.title}: {<CalculateDate iepDate={student.iepDate} days={date.days} />}
                        </li>
                    )
                }))
            })}
            <StudentList studentList={studentList} />
        </div>
    );
}

export default Dashboard;