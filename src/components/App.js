import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Home />
      <Footer></Footer>
    </div>
  );
}

export default App;
