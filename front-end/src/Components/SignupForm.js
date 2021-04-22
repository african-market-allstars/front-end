import Reactfrom 'react'



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
                </div>
            </form>
        </div>
    )
}