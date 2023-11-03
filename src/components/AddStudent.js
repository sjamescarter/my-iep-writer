import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function AddStudent({ onSubmit }) {
    const [formData, setFormData] = useState({
        studentNumber: "",
        firstName: "",
        lastName: "",
        birthdate: "",
        iepDate: "",
        threeYearRe: false
    });
    
    const history = useHistory()
    
    function handleChange(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value; 
        
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(formData);
        history.push("/students");
    }
    
    return (
        <div>
            <h2>Add Student</h2>
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="studentNumber">Student ID: </label>
                <StyledInput 
                    type="number" 
                    name="studentNumber" 
                    value={formData.studentId}
                    onChange={handleChange}
                    />
                <label htmlFor="firstName">First Name: </label>
                <StyledInput 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                <label htmlFor="lastName">Last Name: </label>
                <StyledInput 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    />
                <label htmlFor="birthdate">Birthdate: </label>
                <StyledInput 
                    type="date" 
                    name="birthdate" 
                    value={formData.birthdate}
                    onChange={handleChange}
                    />
                <label htmlFor="iepDate">IEP Deadline: </label>
                <StyledInput 
                    type="date" 
                    name="iepDate" 
                    value={formData.iepDate}
                    onChange={handleChange}
                    />
                <label htmlFor="threeYearRe">Three-Year Reevaluation? </label>
                <input 
                    type="checkbox" 
                    name="threeYearRe" 
                    checked={formData.threeYearRe} 
                    onChange={handleChange} 
                    />
                <StyledSubmit
                    type="submit" 
                    value="Create New Student" 
                    />
            </StyledForm>
        </div>
    );
}

// Styles
const StyledForm = styled.form`
    background: #FFCB77;
    border-radius: 1.5em;
    margin: 0 0 2em;
    padding: 2em;
    width: 225px;
`

const StyledInput = styled.input`
    display: block;
    margin: .5em 0 1.5em;
    width: 200px;
`

const StyledSubmit = styled.input`
    background: #FEF9EF;
    border: none;
    border-radius: 1em;
    padding: 1em;
    margin: 2.5em 0 .25em;

    &:hover {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
        cursor: pointer;
    }
`

export default AddStudent;