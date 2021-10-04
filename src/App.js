import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
