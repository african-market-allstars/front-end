import React  from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';

<<<<<<< HEAD
=======
import UserForms from './Components/UserForms'
import Home from "./Components/Home";
import About from './Components/About'
import PrivateRoute from './Components/PrivateRoute'
import Profile from './Components/Profile'



>>>>>>> 5e205205f4f85c562b4c5a6e459c84d106f31beb

function App() {

  return (
    <div className="App">
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About Us</Link>
        <Link className="link" to="/shop">Market Place</Link>
        <Link className="link" to="/login">Log-in</Link>
        <Link className="link" to="/login/signup">Sign-up</Link>
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
      
        {/* <Route path='/shop'>
          <Shop />
        </Route> */}
        <PrivateRoute path='profile'>
          <Profile />
        </PrivateRoute>
      </Switch>

    </div>
  );
}

export default App;
