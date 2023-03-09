import React from "react";
import { useHistory } from 'react-router-dom';
import Button from "./Button";
import { calculateDate } from "./CalculateDate";
import DatesList from "./DatesList";
import StudentList from "./StudentList";

function Dashboard({ dueDates, studentList, setDueDates }) {
    const history = useHistory();
    const incompleteDates = [...dueDates].filter(date => date.completed === false);
    const upcomingDates = [...incompleteDates].filter(dueDate => {
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
                <Button onClick={() => history.push("/calendar")}>See More</Button>
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