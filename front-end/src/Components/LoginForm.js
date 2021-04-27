import React from "react";
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
  const [formValues , formErrors , disabled, inputChange , formSubmit] = useForm(startSignUp , startFormErrors , startDisabled)
  const values = formValues
  const change = inputChange
  const submit = formSubmit
  const errors = formErrors 

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
}
