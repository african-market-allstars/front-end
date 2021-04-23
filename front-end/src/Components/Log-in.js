import React from "react";
import SignupForm from "./SignupForm";
import { useForm } from "../hook/useForm";


// Register/Sign-Up initialValues
// const startSignUp = {
//   //text inputs//
//   name: "",
//   email: "",
//   password: "",
//   //checkbox//
//   terms: false,
//   age: false,
// };
// // Register/Sign-Up initialErrors
// const startFormErrors = {
//   name: "",
//   email: "",
//   password: "",
//   terms: true,
//   age: "",
// };
// // Login initialValues
// const startSignUp = {
//   //text inputs//
//   name: "",
//   password: "",
// };
// // Login initialErrors
// const startFormErrors = {
//   name: "",
//   email: "",
// };

const startDisabled = true;

export default function LogIn() {
  // const [signUp, setSignUp] = useState(startSignUp);
  // const [formErrors, setFormErrors] = useState(startFormErrors);
  // const [disabled, setDisabled] = useState(startDisabled);

  // New Hook tied to FormState
  // const [formValues , formErrors , disabled, inputChange , formSubmit] = useForm(startSignUp , startFormErrors , startDisabled)

  //EventHandelers

  // const inputChange = (name, value) => {
  //   yup
  //     .reach(schema, name)
  //     .validate(value)
  //     .then(() => {
  //       setFormErrors({
  //         ...formErrors,
  //         [name]: "",
  //       });
  //     })
  //     .catch((err) => {
  //       setFormErrors({
  //         ...formErrors,
  //         [name]: err.errors[0],
  //       });
  //     });
  //   setSignUp({
  //     ...signUp,
  //     [name]: value,
  //   });
  // };

  // const formSubmit = () => {
  //   const newSignup = {
  //     name: signUp.name.trim(),
  //     email: signUp.email.trim(),
  //     password: signUp.password,
  //   };
  // };

  // useEffect(() => {
  //   schema.isValid(signUp).then((valid) => {
  //     setDisabled(!valid);
  //   });
  // }, [signUp]);

  return (
    <div>
      <h3>Sign Up</h3>
      <SignupForm/>
    </div>
  );
}
