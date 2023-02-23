import React from "react";

function CalculateDate({ dateTitle, iepDate, days }) {
    const newDeadline = new Date(
        iepDate.getYear() + 1900, 
        iepDate.getMonth(), 
        iepDate.getDate() - days
    );

    return <div>{dateTitle}: {newDeadline}</div>
}

export default CalculateDate;