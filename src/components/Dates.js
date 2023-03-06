import { postRequest } from "./Fetch";

function createAnnualDates(studentNumber, setState) {
    const annualDates = [
        {
            studentNumber: studentNumber,
            title: "Domain Meeting",
            days: 60,
            completed: false
        },
        {
            studentNumber: studentNumber,
            title: "Collect Data",
            days: 15,
            completed: false
        },
        {
            studentNumber: studentNumber,
            title: "Send Report Home",
            days: 10,
            completed: false
        },
        {
            studentNumber: studentNumber,
            title: "IEP Rough Draft",
            days: 3,
            completed: false
        },
        {
            studentNumber: studentNumber,
            title: "IEP Meeting",
            days: 0,
            completed: false
        }
    ];

    annualDates.map(date => postRequest("/dates", date, setState));
} 

export { createAnnualDates };