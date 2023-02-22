import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import Calendar from './Calendar';
import Students from './Students';
import AddStudent from './AddStudent';
import StudentList from './StudentList';
import Settings from './Settings';
import Footer from './Footer';

const API = "http://localhost:3000/students"

function App() {
  const [ studentList, setStudentList ] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setStudentList(data))
  })

  function onSubmit(newStudent) {
    setStudentList([...studentList, newStudent]);
  }

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Dashboard>
            <StudentList studentList={studentList} />
          </Dashboard>
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route exact path="/students">
          <Students>
            <StudentList studentList={studentList} />
          </Students>
        </Route>
        <Route path="/students/new">
          <AddStudent onSubmit={onSubmit}/>
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
