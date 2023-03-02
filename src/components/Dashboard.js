import React from "react";
import CalculateDate from "./CalculateDate";
import StudentList from "./StudentList";

function Dashboard({ dueDates, studentList }) {
    return (
        <div>
            <h2>Dashboard</h2>
            {dueDates.map(date => {
                const student = studentList.find(student => student.studentNumber === date.studentNumber);
                const {firstName, lastName, iepDate} = student;

                if(date.completed === false) {
                    return (
                    <li key={date.id}>
                        {firstName} {lastName}'s {date.title}: {<CalculateDate iepDate={iepDate} days={date.days} />}
                    </li>
                    )
                }
            })}
            <StudentList studentList={studentList} />
        </div>
    );
}

export default Dashboard;