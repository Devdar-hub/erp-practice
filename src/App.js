// import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';


import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import React from 'react'


function App() {

  return (
    <Router>
      <Login token="asdfefcrg"/>
      
    </Router>
  );
}

export default App;