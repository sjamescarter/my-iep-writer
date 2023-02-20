import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const blankForm = {
    id: "",
    firstName: "",
    lastName: "",
    birthdate: "",
    iepDate: "",
}

function AddStudent({ onSubmit }) {
    const [ formData, setFormData ] = useState(blankForm);
    const history = useHistory()
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(formData);
        // setFormData(blankForm);
        history.push("/students");
    }

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">Student ID: </label>
                <input 
                    type="number" 
                    name="id" 
                    value={formData.id}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="firstName">First Name: </label>
                <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="lastName">Last Name: </label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="birthdate">Birthdate: </label>
                <input 
                    type="date" 
                    name="birthdate" 
                    value={formData.birthdate}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="iepDate">IEP Deadline: </label>
                <input 
                    type="date" 
                    name="iepDate" 
                    value={formData.iepDate}
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