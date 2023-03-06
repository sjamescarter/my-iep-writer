const today = new Date();

function calculateDate(iepDate, days) {
    const [ year, month, day ] = iepDate.split("-");
    const totalDays = Math.ceil(days * 7/5)
    const newDeadline = new Date(year, month - 1, day - totalDays);

    return newDeadline;
}

function calculateColor(iepDate, days) {
    let color;
    const newDeadline = new Date(calculateDate(iepDate, days));
    const twoWeeks = new Date(newDeadline.getFullYear(), newDeadline.getMonth(), newDeadline.getDate() - 14)
    const oneWeek = new Date(newDeadline.getFullYear(), newDeadline.getMonth(), newDeadline.getDate() - 7)
    
    if(today < twoWeeks) {
        return color = "#36A9D3";
    } else if (today <= oneWeek) {
        return color = "#FFA10A";
    } else {
        return color = "#FE6D73";
    }
}

export { calculateDate, calculateColor };