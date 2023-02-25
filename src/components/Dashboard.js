import React from "react";
import CalculateDate from "./CalculateDate";
import StudentList from "./StudentList";

function Dashboard({ studentList, dueDates }) {
    return (
        <div>
            <h2>Dashboard</h2>
            {dueDates.map(student => {
                return(
                    <li>{student}</li>
                )
            })}
            <StudentList studentList={studentList} />
        </div>
    );
}

export default Dashboard;