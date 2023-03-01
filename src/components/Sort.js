import React, { useState } from "react";

function Sort() {
    const [sortBy, setSortBy] = useState('none')

    function handleSort(e) {
        setSortBy(e.target.value)
    }

    console.log(sortBy)
    return (
        <>
            <label htmlFor="sort">Sort by: </label>
            <select name="sort" id="sort" value={sortBy} onChange={handleSort}>
                <option value="none">Select</option>
                <option value="name">Name</option>
                <option value="iep">IEP Date</option>
            </select>
        </>
    );
}

export default Sort;