import React from "react";

export default function LoginForm(props) {
  const { values, change, submit, disabled, errors } = props;
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
