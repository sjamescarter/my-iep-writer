import React from "react";

function Sort({ sortBy, setSortBy }) {
    return (
        <>
            <label htmlFor="sort">Sort by: </label>
            <select name="sort" id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="none">Select</option>
                <option value="name">Name</option>
                <option value="iep">IEP Date</option>
            </select>
        </>
    );
}

export default Sort;