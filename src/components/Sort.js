import { calculateDate } from "./calculate";

export function sortABC(list) {
    const abc = [...list].sort((a, b) => {
        const nameA = a.firstName.toUpperCase();
        const nameB = b.firstName.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    return abc;
}

export function sortIEP(list) {
    const iep = [...list].sort((a, b) => {
        const dateA = new Date(a.iepDate);
        const dateB = new Date(b.iepDate);
        return dateA - dateB
    });

    return iep;
}

export function sortDates(dateList, studentList, ascend) {
    const sortedDates = [...dateList].sort((a, b) => {
        const dateA = new Date(calculateDate(studentList.find(student => student.studentNumber === a.studentNumber).iepDate, a.days));
        const dateB = new Date(calculateDate(studentList.find(student => student.studentNumber === b.studentNumber).iepDate, b.days));
        
        return ascend ? dateA - dateB : dateB - dateA;
    });

    return sortedDates;
}
