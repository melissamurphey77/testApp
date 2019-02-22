import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Tax from './components/pages/Tax/Tax';
import Credit from './components/pages/Credit/Credit';
import Business from './components/pages/Business/Business';
import Travel from './components/pages/Travel/Travel';
import realEstate from './components/pages/realEstate/realEstate';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><NavLink to={'/'} className="nav-link"> Home </NavLink></li>
            <li><NavLink to={'/tax'} className="nav-link">Tax Prep</NavLink></li>
            <li><NavLink to={'/credit'} className="nav-link">Credit Repair</NavLink></li>
            <li><NavLink to={'/business'} className="nav-link">Business Development</NavLink></li>
            <li><NavLink to={'/travel'} className="nav-link">ASAP Travel</NavLink></li>
            <li><NavLink to={'/realEstate'} className="nav-link">Real Estate</NavLink></li>
            <li><NavLink to={'/about'} className="nav-link">About Us</NavLink></li>
            <li><NavLink to={'/contact'} className="nav-link">Contact Us</NavLink></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Tax} />
              <Route path='/about' component={Credit} />
              <Route path='/about' component={Business} />
              <Route path='/about' component={Travel} />
              <Route path='/about' component={realEstate} />
              <Route path='/about' component={About} />
              <Route path='/about' component={Contact} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
