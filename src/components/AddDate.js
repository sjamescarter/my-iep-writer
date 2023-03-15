import React, { useState } from "react";

function AddDate() {
    const [formData, setFormData] = useState({
        title: "",
        days: 0,
        threeYearRe: false
    })

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
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Deadline Name: </label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
            <label htmlFor="days">Number of Days Prior to IEP: </label>
            <input type="number" name="days" value={formData.title} onChange={handleChange} />
            <label htmlFor="threeYearRe">Three-Year Reevaluation? </label>
            <input type="checkbox" name="threeYearRe" checked={formData.threeYearRe} onChange={handleChange} />
            <input type="submit" value="Create New Deadline" />
        </form>
    )
}

export default AddDate;