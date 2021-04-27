import React, { useEffect, useState } from 'react';
import SignupForm from './SignupForm'
import * as yup from 'yup'
import schema from '../Utilities/formSchema'
// import { axiosWithAuth } from '../Utilities/axiosWithAuth';  code will be uncommented when endpoints are supplied. 

const startSignUp = {
    //text inputs//
    name: '',
    email: '',
    password: '',
    //checkbox//
    terms: false,
    age: false,
}
const startFormErrors = {
    name: '',
    email: '',
    password: '',
    terms: true,
    age: '',
}
const startDisabled = true


export default function LogIn() {
    const [signUp, setSignUp] = useState(startSignUp)
    const [formErrors, setFormErrors] = useState(startFormErrors)
    const [disabled, setDisabled] = useState(startDisabled)


    //EventHandelers

    const inputChange = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: '',
                })
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })
        setSignUp({
            ...signUp, [name]: value
        })
    }

    const formSubmit = () => {
        const newSignUp = {
            name: signUp.name.trim(),
            email: signUp.email.trim(),
            password: signUp.password,
        }
    }

    useEffect(() => {
        schema.isValid(signUp)
            .then(valid => {
                setDisabled(!valid)
            })
    }, [signUp])

    return (
        <div>
            <h3>Sign Up or Log In</h3>
            <SignupForm
                values={signUp}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors} />
        </div>
    )
}


