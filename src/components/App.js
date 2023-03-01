import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import Calendar from './Calendar';
import Students from './Students';
import AddStudent from './AddStudent';
import Settings from './Settings';
import Footer from './Footer';
import styled from 'styled-components';

const API = "http://localhost:3000/students"

const Container = styled.div`
  margin: auto;
  width: 90%;
  max-width: 1440px;
`

function App() {
  const [ studentList, setStudentList ] = useState([]);
  const [ dueDates, setDueDates ] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setStudentList(data))
  }, [])

  function onSubmit(newStudent) {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newStudent)
    })
    .then(r => r.json())
    .then(student => setStudentList([...studentList, student]))
  }

  console.log(dueDates)
  console.log()

  function onDelete(id) {
    history.push("/students");

    fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(setStudentList(studentList.filter(student => student.id !== id)))
  };

  return (
    <div style={{ background: "#FEF9EF" }}>
      <Header></Header>
      <Container>
        <Switch>
          <Route exact path="/">
            <Dashboard studentList={studentList} />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/students/new">
            <AddStudent onSubmit={onSubmit} />
          </Route>
          <Route path="/students">
            <Students studentList={studentList} api={API} onDelete={onDelete} />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
