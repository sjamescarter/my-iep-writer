import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
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
        <Route>
          <AddStudent path="/students/new"/>
        </Route>
        <Route>
          <Settings path="/settings" />
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
