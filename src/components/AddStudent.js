import React, { useState } from "react";

const blankForm = {
    id: "",
    firstName: "",
    lastName: "",
    birthdate: "",
    iepDate: "",
}

function AddStudent() {
    const [ form, setForm ] = useState(blankForm)

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    console.log(form)

    return (
        <div>
            <h2>Add Student</h2>
            <form>
                <label htmlFor="id">Student ID: </label>
                <input 
                    type="number" 
                    name="id" 
                    value={form.id}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="firstName">First Name: </label>
                <input 
                    type="text" 
                    name="firstName" 
                    value={form.firstName}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="lastName">Last Name: </label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={form.lastName}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="birthdate">Birthdate: </label>
                <input 
                    type="date" 
                    name="birthdate" 
                    value={form.birthdate}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="iepDate">IEP Deadline: </label>
                <input 
                    type="date" 
                    name="iepDate" 
                    value={form.iepDate}
                    onChange={handleChange}
                />
                <br></br>
                <input 
                    type="submit" 
                    value="Add Student" 
                />
            </form>
        </div>
    );
}

export default AddStudent;