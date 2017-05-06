import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';
import '../node_modules/material-design-lite/material.min.css';
import '../node_modules/material-design-lite/material.min.js';

// Components
import Home from "./Components/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <div className="demo-layout-transparent mdl-layout mdl-js-layout">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              {/*<!-- Title -->*/}
              <span className="mdl-layout-title">Skills</span>
              {/*<!-- Add spacer, to align navigation to the right -->*/}
              <div className="mdl-layout-spacer"></div>
              {/*<!-- Navigation -->*/}
              <nav className="mdl-navigation">
                <NavLink className="mdl-navigation__link" href="" to="/">Landing</NavLink>
                <NavLink className="mdl-navigation__link" href="" to="/home">Home</NavLink>
              </nav>
            </div>
          </header> 
          <main className="mdl-layout__content">
            <div className="main-container mdl-grid">
              <Switch>
                  <Route exact path="/home" render={() => (
                    <Home />
                  )} />
                </Switch>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
