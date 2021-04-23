import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm"


export default function LogIn() {
 

  return (
    <section className="UserForms">
    <div>
      <h3>Sign Up</h3>
      <SignupForm/>
    </div>
     <div>
     <h3>Log In</h3>
     <LoginForm
     />
   </div>
   </section>
  );
}
