import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import './App.css';

import UserForms from './Components/UserForms'
import Home from "./Components/Home";
import About from './Components/About'
import PrivateRoute from './Components/PrivateRoute'
import Profile from './Components/Profile'
import Shop from './Components/Shop'



function App() {
  const logout = () => {
    localStorage.removeItem('token')
    alert("You've been signed out")

  }
  return (
    <div className="App">
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About Us</Link>
        <Link className="link" to="/shop">Market Place</Link>
        <Link className="link" to="/login">Sellers</Link>
        <Link onClick={logout} className="link" to="#">Log Out</Link>
      </nav>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/login'>
          <UserForms />
        </Route>
        <Route path="/signup">
          <UserForms />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <PrivateRoute path='/profile/:id' component={Profile}/>
      </Switch>

    </div>
  );
}

export default App;
