import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import LogIn from "./Components/Login";
import SignUp from "./Components/Log-in";
import Home from "./Components/Home";
import About from './Components/About'

import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Components/Profile";
import { axiosWithAuth } from "./Utilities/axiosWithAuth";
import axios from "axios";


function App() {
  return (
    <div className="App">
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About Us</Link>
        <Link className="link" to="/shop">Market Place</Link>
        <Link className="link" to="/login">Log-in</Link>
        <Link className="link" to="/sign-up">Sign-up</Link>
      </nav>
      <Switch>

         <Route exact path='/'>
          <Home />
          </Route>       
        {/*<Route path='/about'>
          <About />
        </Route> */}
        <Route path="/login">
          <LogIn />
        </Route>
        {/* <Route path='/login'>
          <Log-in />
        <Route path="/sign-up">
          <SignUp />
        </Route>
        {/* <Route path='/shop'>
          <Shop />
        </Route> */}
        <PrivateRoute path="profile">
          <Profile />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
