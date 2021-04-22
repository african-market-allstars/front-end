import React, { useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {axiosWithAuth} from './Utilities/axiosWithAuth';
import axios from 'axios'; 

function App() {

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/1')
    .then((response => {
    console.log(response.data)
    }))
    .catch((error => {
    console.log('something went wrong',error)
    }))
    }
  ,[])

  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/login'>Sign-up Or Log-in</Link>
        <Link to='/shop'>Market Place</Link>
      </nav>
      {/* <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/login'>
          <Log-in />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
      </Switch> */}

    </div>
  );
}

export default App;
