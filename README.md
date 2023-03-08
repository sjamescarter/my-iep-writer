# My IEP Writer

This project is designed to keep track of due dates associated with students who have an IEP. The application calulates multiple deadlines so teachers can stay on top of their legal IEP requirements.

## db.json

This application uses a db.json server. The server repo can be found at https://github.com/sjamescarter/my-iep-db. This server has two endpoints: `students` and `dates`.

## Dates

At this time, the dates to be calculated for each student are located in the Dates.js component. New or different dates can only be added programatically at this time. To add new dates, update the Dates component with objects that correspond to the existing format. 

```react
{
    studentNumber: studentNumber,
    title: "Domain Meeting",
    days: 60,
    completed: false
}
```

Date calculations use logic to keep deadlines on weekdays.
