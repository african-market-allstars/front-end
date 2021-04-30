// import axios from 'axios';
// import { axiosWithAuth } from '../Utilities/axiosWithAuth'
import React, { useEffect } from 'react'
import { useForm } from '../hook/useForm'
import { axiosWithAuth } from '../Utilities/axiosWithAuth'
import { useHistory } from 'react-router';
import axios from 'axios';
//added for material ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { green } from '@material-ui/core/colors';



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                African Market Place
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignupForm() {
    const classes = useStyles();
    const { push } = useHistory();
    //Register/Sign-Up initialValues
    const startSignUp = {
        //text inputs//
        username: "",
        email: "",
        password: "",
        //checkbox//
        // terms: false,
    };
    // Register/Sign-Up initialErrors
    const startFormErrors = {
        username: "",
        email: "",
        password: "",
        // terms: true,
    };

    const startDisabled = true;
    // const { values, change, submit, disabled, errors } = props
    // So instead of Props The component is using a custom hook in order to reuse a lot of the code that was written previously in Log-In.js
    const [formValues, formErrors, disabled, inputChange, formSubmit] = useForm(startSignUp, startFormErrors, startDisabled)
    const values = formValues
    const change = inputChange
    const errors = formErrors
    const submit = formSubmit

    const newSignup = {

        username: values.username,
        email: values.email,
        password: values.password,

    };



    const newUser = (login) => {

        axios.post('https://african-market-allstars.herokuapp.com/api/auth/register', login)
            .then(res => {
                console.log('success', res)
                push('/login')
            })
            .catch(err => console.log('error', err.message))

    }


    const onSubmit = evt => {
        evt.preventDefault()
        newUser(newSignup)


    }
    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form className={classes.form} onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={values.username}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={values.email}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={values.password}
                                onChange={onChange}

                            />
                        </Grid>

                        {/* <Grid item xs={12}>
                            <FormControlLabel

                                control={<Checkbox checked={values.terms}
                                    onChange={onChange}
                                    type='checkbox'
                                    name='terms'
                                    color="primary" />}
                                label="Do you agree to be a beautiful human?"

                            />
                        </Grid> */}

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='link'

                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

// export default function SignupForm() {

//     // Register/Sign-Up initialValues
//     const startSignUp = {
//         //text inputs//
//         name: "",
//         email: "",
//         password: "",
//         //checkbox//
//         terms: false,
//         age: false,
//     };
//     // Register/Sign-Up initialErrors
//     const startFormErrors = {
//         name: "",
//         email: "",
//         password: "",
//         terms: true,
//         age: "",
//     };

//     const startDisabled = true;
//     // const { values, change, submit, disabled, errors } = props
//     // So instead of Props The component is using a custom hook in order to reuse a lot of the code that was written previously in Log-In.js
//     const [formValues, formErrors, disabled, inputChange, formSubmit] = useForm(startSignUp, startFormErrors, startDisabled)
//     const values = formValues
//     const change = inputChange
//     const errors = formErrors
//     const submit = formSubmit

//     const newSignup = {
//         username: formValues.name.trim(),
//         password: formValues.password,
//     };


//     const newUser = (login) => {
//         axios.post('http://localhost:3000/api/auth/register', login)
//             .then(res => console.log('success', res))
//             .catch(err => console.log('error', err))
//     }


//     const onSubmit = evt => {
//         evt.preventDefault()
//         newUser(newSignup)
//         submit()

//     }
//     const onChange = evt => {
//         const { name, value, type, checked } = evt.target
//         const valueToUse = type === 'checkbox' ? checked : value
//         change(name, valueToUse)
//     }

//     return (
//         <div>
//             <form className='signUp' onSubmit={onSubmit}>
//                 <div>
//                     <h2>Sign Up Here</h2>
//                     <label>Name:
//                         <input
//                             value={values.name}
//                             onChange={onChange}
//                             name='name'
//                             type='text'
//                             placeholder='First and Last name'
//                         />
//                     </label>
//                     <label>Email:
//                         <input
//                             value={values.email}
//                             onChange={onChange}
//                             name='email'
//                             type='email'
//                             placeholder='Email' />
//                     </label>
//                     <label> Password:
//                         <input
//                             value={values.password}
//                             onChange={onChange}
//                             name='password'
//                             type='password'
//                             placeholder='Password must be more than 4 characters' />
//                     </label>
//                     <label> Terms:
//                         <p>Do you agree to be a beautiful human??</p>
//                         <input
//                             checked={values.terms}
//                             onChange={onChange}
//                             name='terms'
//                             type='checkbox'
//                         />
//                     </label>
//                     <label>Are you over the age of 18?
//                         <input
//                             checked={values.age}
//                             onChange={onChange}
//                             name='age'
//                             type='checkbox' />
//                     </label>
//                     <div className='errors'>
//                         <div>{errors.name}</div>
//                         <div>{errors.email}</div>
//                         <div>{errors.password}</div>
//                         <div>{errors.terms}</div>
//                         <div>{errors.age}</div>
//                     </div>
//                     <button disabled={disabled}>Sign-Up</button>
//                 </div>
//             </form>
//         </div>
//     )
// }





