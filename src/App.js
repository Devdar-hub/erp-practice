// import logo from './logo.svg';
import "./App.css";
import Login from "./Components/Login";

import Admin  from "./Components/Admin";
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
