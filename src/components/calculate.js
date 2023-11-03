const today = new Date();

export function calculateDate(iepDate, days) {
    const [ year, month, day ] = iepDate.split("-");
    const totalDays = Math.ceil(days * 7/5)
    const newDeadline = new Date(year, month - 1, day - totalDays);

    return newDeadline;
}

export function calculateColor(iepDate, days) {
    let color;
    const newDeadline = new Date(calculateDate(iepDate, days));
    const twoWeeks = new Date(newDeadline.getFullYear(), newDeadline.getMonth(), newDeadline.getDate() - 14)
    const oneWeek = new Date(newDeadline.getFullYear(), newDeadline.getMonth(), newDeadline.getDate() - 7)
    
    if(today < twoWeeks) {
        return color = "#17C3B2";
    } else if(today <= oneWeek) {
        return color = "#FFA10A";
    } else {
        return color = "#FE6D73";
    }
}