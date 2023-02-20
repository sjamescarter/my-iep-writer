import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Calendar from './Calendar';
import Students from './Students';
import AddStudent from './AddStudent';
import Settings from './Settings';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route exact path="/students">
          <Students />
        </Route>
        <Route path="/students/new">
          <AddStudent />
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
