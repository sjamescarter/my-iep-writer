import React from "react";
import { useHistory } from 'react-router-dom';
import { calculateDate } from "./CalculateDate";
import DatesList from "./DatesList";
import StudentList from "./StudentList";

function Dashboard({ dueDates, studentList }) {
    const history = useHistory();

    // const orderedDueDates = [...dueDates].sort((a, b) => {
    //     const dateA = new Date(calculateDate(studentList.find(student => student.studentNumber === a.studentNumber).iepDate, a.days));
    //     const dateB = new Date(calculateDate(studentList.find(student => student.studentNumber === b.studentNumber).iepDate, b.days));
    //     return dateA - dateB;
    // });

    const upcomingDates = [...dueDates].filter(dueDate => {
        const {iepDate} = [...studentList].find(student => student.studentNumber === dueDate.studentNumber);
        const date = new Date(calculateDate(iepDate, dueDate.days));
        const today = new Date();
        return date > today;
    })

    return (
        <div>
            <h2>Dashboard</h2>
            <div>
                <h3>Upcoming Due Dates</h3>
                <DatesList dueDates={upcomingDates.slice(0, 3)} studentList={studentList} />
                <button onClick={() => history.push("/calendar")}>See More</button>
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