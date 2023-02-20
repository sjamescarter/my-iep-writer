import React from "react";

function AddStudent() {
    return (
        <div>
            <h2>Add Student</h2>
            <form>
                <label htmlFor="id">Student ID: </label>
                <input type="number" name="id" />
                <br></br>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" />
                <br></br>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" />
                <br></br>
                <label htmlFor="birthdate">Birthdate: </label>
                <input type="date" name="birthdate" />
                <br></br>
                <label htmlFor="iepDate">IEP Deadline: </label>
                <input type="date" name="iepDate" />
                <br></br>
                <input type="submit" value="Add Student" />
            </form>
        </div>
    );
}

export default AddStudent;