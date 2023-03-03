import React from "react";
import DatesList from "./DatesList";
import StudentList from "./StudentList";

function Dashboard({ dueDates, studentList }) {
    return (
        <div>
            <h2>Dashboard</h2>
            <div>
                <h3>Upcoming Due Dates</h3>
                <DatesList dueDates={dueDates.slice(0, 3)} studentList={studentList} />
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