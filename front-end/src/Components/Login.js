import LoginForm from "./LoginForm";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import schema from "../Utilities/formSchema";
import styled from "styled-components";

const StyledLoginForm = styled.div``;

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

export default function Login() {
  const [signUp, setSignUp] = useState(startSignUp);
  const [formErrors, setFormErrors] = useState(startFormErrors);
  const [disabled, setDisabled] = useState(startDisabled);

  //EventHandelers

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setSignUp({
      ...signUp,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newSignup = {
      name: signUp.name.trim(),
      email: signUp.email.trim(),
      password: signUp.password,
    };
  };

  useEffect(() => {
    schema.isValid(signUp).then((valid) => {
      setDisabled(!valid);
    });
  }, [signUp]);
  return (
    <div>
      <h3>Sign Up</h3>
      <LoginForm
        values={signUp}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}
