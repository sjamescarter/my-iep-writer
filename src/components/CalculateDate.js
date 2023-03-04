function calculateDate(iepDate, days) {
    const [ year, month, day ] = iepDate.split("-");
    const totalDays = Math.ceil(days * 7/5)
    const newDeadline = new Date(year, month - 1, day - totalDays);

    return newDeadline.toDateString();
}

export { calculateDate };