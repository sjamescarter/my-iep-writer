import React from "react";
import StudentCard from "./StudentCard"

function StudentList({ studentList }) {
    console.log(studentList)
    return (
        <div>
            {studentList.map((student) => {
                return <StudentCard key={student.studentId} student={student} />
            })}
        </div>
    );
}

export default StudentList;