import React from "react";

function CalculateDate({ dateTitle, iepDate, days, holidays }) {
    const [ year, month, day ] = iepDate.split("-");
    const totalDays = days * 7/5 + holidays
    const newDeadline = new Date(year, month - 1, day - totalDays);
    console.log(newDeadline)
    return <p>{dateTitle}: {newDeadline.toDateString()}</p>
}

export default CalculateDate;