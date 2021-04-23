import React, { useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
// ashley
import LogIn from "./Components/Login";
import SignUp from "./Components/Log-in";
import Home from "./Components/Home";

// already merged with main
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Components/Profile";
import { axiosWithAuth } from "./Utilities/axiosWithAuth";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <nav>
        <Link class="link" to="/">Home</Link>
        <Link class="link" to="/about">About Us</Link>
        <Link class="link" to="/shop">Market Place</Link>
        <Link class="link" to="/login">Log-in</Link>
        <Link class="link" to="/sign-up">Sign-up</Link>
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
