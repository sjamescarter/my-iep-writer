import React from "react";
import StudentCard from "./StudentCard"

function StudentList({ studentList }) {
    console.log(studentList)
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", margin: "2em" }}>
            {studentList.map((student) => {
                return <StudentCard key={student.studentId} student={student} />
            })}
        </div>
    );
}

export default StudentList;