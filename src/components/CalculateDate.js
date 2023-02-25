import React from "react";

function CalculateDate({ dateTitle, iepDate, days, name }) {
    const [ year, month, day ] = iepDate.split("-");
    const totalDays = days * 7/5
    const newDeadline = new Date(year, month - 1, day - totalDays);
    return (`${name}'s ${dateTitle} ${newDeadline.toDateString()}`);
}

export default CalculateDate;

//  <p>{dateTitle}: {newDeadline.toDateString()}</p>