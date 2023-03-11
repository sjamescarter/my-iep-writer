import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import Calendar from './Calendar';
import Student from './Student';
import Students from './Students';
import AddStudent from './AddStudent';
import Footer from './Footer';
import styled from 'styled-components';
import { getRequest, postRequest, deleteRequest } from './fetch';
import { createAnnualDates } from './Dates';
import { sortDates } from './sort';
import { calculateDate } from './calculate';

const Container = styled.div`
  margin: auto;
  width: 90%;
  max-width: 1440px;
`
export { Container }

function App() {
  const [ studentList, setStudentList ] = useState([]);
  const [ dueDates, setDueDates ] = useState([]);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const history = useHistory();
  
  const getHeight = () => setWindowHeight(window.innerHeight);
  const height = windowHeight - 300;

  useEffect(() => {
    window.addEventListener("resize", getHeight);

    return (() => {
      window.removeEventListener("resize", getHeight);
    })
  }, [windowHeight])

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

  const ascendingDates = sortDates([...dueDates], [...studentList], true)
 
  return (
    <div>
      <Header></Header>
      <Container style={{ minHeight: height}}>
        <Switch>
          <Route exact path="/">
            <Dashboard 
              dueDates={ascendingDates} 
              studentList={studentList} 
              setDueDates={setDueDates} 
            />
          </Route>
          <Route path="/calendar">
            <Calendar 
              heading="Calendar"
              dueDates={ascendingDates} 
              studentList={studentList} 
              setDueDates={setDueDates} 
            />
          </Route>
          <Route exact path="/students/new">
            <AddStudent onSubmit={onSubmit} />
          </Route>
          <Route exact path={"/students/:ID"}>
                <Student 
                  studentList={studentList} 
                  onDelete={onDelete} 
                  dueDates={dueDates} 
                  setDueDates={setDueDates} 
                />
          </Route>
          <Route exact path="/students">
            <Students studentList={studentList} />
          </Route>
        </Switch>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
