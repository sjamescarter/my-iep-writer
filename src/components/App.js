import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import Calendar from './Calendar';
import Students from './Students';
import AddStudent from './AddStudent';
// import Settings from './Settings';
import Footer from './Footer';
import styled from 'styled-components';
import { getRequest, postRequest, deleteRequest } from './Fetch';
import { createAnnualDates } from './Dates';
import { calculateDate } from './CalculateDate';

const Container = styled.div`
  margin: auto;
  width: 90%;
  max-width: 1440px;
`
export { Container }

function App() {
  const [ studentList, setStudentList ] = useState([]);
  const [ dueDates, setDueDates ] = useState([]);
  
  const orderedDueDates = [...dueDates].sort((a, b) => {
    const dateA = new Date(calculateDate(studentList.find(student => student.studentNumber === a.studentNumber).iepDate, a.days));
    const dateB = new Date(calculateDate(studentList.find(student => student.studentNumber === b.studentNumber).iepDate, b.days));
    return dateA - dateB;
  });
  
  const history = useHistory();
  const height = window.innerHeight - 300;

  useEffect(() => {
    getRequest("/students", setStudentList)
    getRequest("/dates", setDueDates)
  }, []);

  function onSubmit(newStudent) {
    postRequest("/students", newStudent, setStudentList, studentList);
    createAnnualDates(newStudent.studentNumber, setDueDates);
  }

  function onDelete(id) {
    const {studentNumber} = studentList.find(student => student.id === id);
    const studentDates = dueDates.filter(dates => dates.studentNumber === studentNumber);
    studentDates.map(date => deleteRequest("/dates", date.id, setDueDates, dueDates));
    history.push("/students");
    deleteRequest("/students", id, setStudentList, studentList);
  };

  return (
    <div>
      <Header></Header>
      <Container style={{ minHeight: height}}>
        <Switch>
          <Route exact path="/">
            <Dashboard dueDates={orderedDueDates} studentList={studentList} />
          </Route>
          <Route path="/calendar">
            <Calendar dueDates={orderedDueDates} studentList={studentList} />
          </Route>
          <Route exact path="/students/new">
            <AddStudent onSubmit={onSubmit} />
          </Route>
          <Route path="/students">
            <Students studentList={studentList} onDelete={onDelete} dueDates={dueDates} />
          </Route>
          {/* <Route path="/settings">
            <Settings />
          </Route> */}
        </Switch>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
