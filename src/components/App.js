import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import Calendar from './Calendar';
import Students from './Students';
import AddStudent from './AddStudent';
import StudentList from './StudentList';
import Settings from './Settings';
import Footer from './Footer';
import CalculateDate from './CalculateDate';

const API = "http://localhost:3000/students"

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
    <div>
      <Header></Header>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
