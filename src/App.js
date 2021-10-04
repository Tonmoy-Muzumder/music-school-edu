import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import Teachers from './components/Teachers/Teachers';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Header></Header>
       <Switch>

        <Route exact path="/">
        <Home></Home>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/services">
          <Services></Services>
        </Route>

        <Route path="/teachers">
          <Teachers></Teachers>
        </Route>

        <Route path="/about">
          <About></About>
        </Route>

        <Route path="*">
            <NotFound></NotFound>
          </Route>
        
      </Switch>
      <Footer></Footer>
    </Router>
   
  );
}

export default App;
