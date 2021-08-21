// import logo from './logo.svg';
import "./App.css";
import Login from "./Components/Login";

import Admin  from "./Components/Admin";

import Convert  from "./Components/Convert";

import Lead  from "./Components/Lead";
import Contact  from "./Components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
    
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Admin">
            <Admin />
          </Route>
          <Route exact path="/Convert">
            <Convert />
          </Route>                    
          <Route exact path="/Lead">
            <Lead />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
