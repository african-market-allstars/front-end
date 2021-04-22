import React, { useEffect, useState } from 'react';
import SignupForm from './SignupForm'

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

        setSignUp({
            ...signUp, [name]: value
        })
    }

    const formSubmit = () => {
        const newSignup = {
            name: signUp.name.trim(),
            email: signUp.name.trim(),
        }
    }

    // useEffect(() => {
    //     schema.isValid(signUp)
    //         .then(valid => {
    //             setDisabled(!valid)
    //         })
    // }, [signUp])

    return (
        <div>
            <h3>Sign Up or Log In</h3>
            <SignupForm
                values={signUp}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled} />
        </div>
    )
}