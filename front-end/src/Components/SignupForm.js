import React from 'react'



export default function SignupForm(props) {
    const { values, change, submit, disabled } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }

    return (
        <div>
            <form className='signUp' onSubmit={onSubmit}>
                <div>
                    <h2>Sign Up here</h2>
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
                            value={value.password}
                            onChange={onChange}
                            name='password'
                            type='password'
                            placeholder='Password must be more than 4 characters' />
                    </label>
                    <label> Terms:
                        <p>Do you agree to be ab beautiful human??</p>
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
                </div>
            </form>
        </div>
    )
}