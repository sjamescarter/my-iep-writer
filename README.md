# My IEP Writer

This project is designed to keep track of due dates associated with students who have an IEP. The application calulates multiple deadlines so teachers can stay on top of their legal IEP requirements.

## db.json

This application uses a db.json server. The server repo can be found at https://github.com/sjamescarter/my-iep-db. This server has two endpoints: `students` and `dates`.

## Dates

At this time, the dates to be calculated for each student are located in the Dates.js component. New or different dates can only be added programatically. To add new dates, update the Dates component with objects that correspond to the following format. The studentNumber is not the same as student.id. The `days` key value is the number of weekdays to be calculated before the corresponding IEP event. Dates added to Dates.js are calculated upon the Add Student form submission.

```js
{
    studentNumber: studentNumber, // This variable references the student
    title: "Event Title", 
    days: 60, // Number of weekdays prior to the IEP date
    completed: false
}
```

## Video

Check out a walk-through of this app at: https://watch.screencastify.com/v/FRAbXmxkoCcO64V16m9o.