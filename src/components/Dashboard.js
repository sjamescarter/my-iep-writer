import React from "react";
import { useHistory } from 'react-router-dom';
import { calculateDate } from "./CalculateDate";
import DatesList from "./DatesList";
import StudentList from "./StudentList";

function Dashboard({ dueDates, studentList, setDueDates }) {
    const history = useHistory();

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
                <DatesList dueDates={upcomingDates.slice(0, 3)} studentList={studentList} setDueDates={setDueDates} />
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