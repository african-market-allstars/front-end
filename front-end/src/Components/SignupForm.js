import React from 'react'
<<<<<<< HEAD



export default function SignupForm(props) {
    const { values, change, submit, disabled, errors } = props

=======
import { useForm} from '../hook/useForm'


export default function SignupForm(props) {

    // Register/Sign-Up initialValues
const startSignUp = {
    //text inputs//
    name: "",
    email: "",
    password: "",
    //checkbox//
    terms: false,
    age: false,
  };
  // Register/Sign-Up initialErrors
  const startFormErrors = {
    name: "",
    email: "",
    password: "",
    terms: true,
    age: "",
  };

  const startDisabled = true;
    // const { values, change, submit, disabled, errors } = props
    // So instead of Props The component is using a custom hook in order to reuse a lot of the code that was written previously in Log-In.js
    const [formValues , formErrors , disabled, inputChange , formSubmit] = useForm(startSignUp , startFormErrors , startDisabled)
    const values = formValues
    const change = inputChange
    const submit = formSubmit
    const errors = formErrors 
        
>>>>>>> 5e205205f4f85c562b4c5a6e459c84d106f31beb
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <div>
            <form className='signUp' onSubmit={onSubmit}>
                <div>
                    <h2>Sign Up Here</h2>
                    <label>Name:
                        <input
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                            placeholder='First and Last name'
                        />
                    </label>
                    <label>Email:
                        <input
                            value={values.email}
                            onChange={onChange}
                            name='email'
                            type='email'
                            placeholder='Email' />
                    </label>
                    <label> Password:
                        <input
                            value={values.password}
                            onChange={onChange}
                            name='password'
                            type='password'
                            placeholder='Password must be more than 4 characters' />
                    </label>
                    <label> Terms:
                        <p>Do you agree to be a beautiful human??</p>
                        <input
                            checked={values.terms}
                            onChange={onChange}
                            name='terms'
                            type='checkbox'
                        />
                    </label>
                    <label>Are you over the age of 18?
                        <input
                            checked={values.age}
                            onChange={onChange}
                            name='age'
                            type='checkbox' />
                    </label>
                    <div className='errors'>
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.terms}</div>
                        <div>{errors.age}</div>
                    </div>
                    <button disabled={disabled}>Sign-Up</button>
                </div>
            </form>
        </div>
    )
}