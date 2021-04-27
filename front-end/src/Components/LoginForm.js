import React from "react";
<<<<<<< HEAD

export default function LoginForm(props) {
  const { values, change, submit, disabled, errors } = props;
=======
import { useForm } from "../hook/useForm";

export default function LoginForm(props) {

  const startSignUp = {
    //text inputs//
    name: "",
    password: "",
  };
  const startFormErrors = {
    name: "",
    email: "",
  };
  const startDisabled = true;

  // const { values, change, submit, disabled, errors } = props;
  const [formValues , disabled, inputChange , formSubmit] = useForm(startSignUp , startFormErrors , startDisabled)
  const values = formValues
  const change = inputChange
  const submit = formSubmit
  // const errors = formErrors 

>>>>>>> 5e205205f4f85c562b4c5a6e459c84d106f31beb
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div>
      <form className="signUp" onSubmit={onSubmit}>
        <div>
          <h2>Login</h2>
          <label>
            Name:
            <input
              value={values.name}
              onChange={onChange}
              name="name"
              type="text"
              placeholder="First and Last name"
            />
          </label>
          <label>
            {" "}
            Password:
            <input
              value={values.password}
              onChange={onChange}
              name="password"
              type="password"
              placeholder="Please enter your secure password"
            />
          </label>
          <button disabled={disabled}>Sign-Up</button>
        </div>
      </form>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 5e205205f4f85c562b4c5a6e459c84d106f31beb
