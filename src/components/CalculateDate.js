import React from "react";

function CalculateDate({ iepDate, days }) {
    const [ year, month, day ] = iepDate.split("-");
    const totalDays = days * 7/5
    const newDeadline = new Date(year, month - 1, day - totalDays);
    return (newDeadline.toDateString());
}

export default CalculateDate;

//  <p>{dateTitle}: {newDeadline.toDateString()}</p>