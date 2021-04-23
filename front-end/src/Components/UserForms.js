import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm"
import { Route , NavLink , Switch} from "react-router-dom"

export default function LogIn() {
 

  return (
    <section className="UserForms">
      <Switch>
        <Route path="/login/newuser">
          <div>
            <SignupForm/>
          </div>
        </Route>

        <Route path="/login">
          <div>
            <LoginForm/>
          </div>
        </Route>
      </Switch>
   <NavLink to ="/login/newuser">New User? | Signup</NavLink>
   <br></br>
   <NavLink to ="/login">Returning User? | Login</NavLink>
   </section>
  );
}
