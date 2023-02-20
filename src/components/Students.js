import React from "react";

function Students({ children }) {
    return (
        <div>
            <h2>Students</h2>
            {children}
        </div>
    );
}

export default Students;