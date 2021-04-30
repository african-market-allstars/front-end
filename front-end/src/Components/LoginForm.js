import React, { useEffect } from "react";
import { useForm } from "../hook/useForm";
import { axiosWithAuth } from "../Utilities/axiosWithAuth"
//Material ui stuff
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const startSignUp = {
    //text inputs//
    username: "",
    password: "",
  };
  const startFormErrors = {
    username: "",
    email: "",
  };
  const startDisabled = true;

  // const { values, change, submit, disabled, errors } = props;
  const [formValues , formErrors , disabled, inputChange , formSubmit] = useForm(startSignUp, startFormErrors, startDisabled)
  const values = formValues
  const change = inputChange
  const submit = formSubmit
  const errors = formErrors 
  const {push} = useHistory()

  // useEffect( () => {
  //   axios.get()
  // },[] )

  const login = (userInfo) => {
    axiosWithAuth().post('https://african-market-allstars.herokuapp.com/api/auth/login', userInfo)
    .then( res => {
      console.log( 'success' , res )
      localStorage.setItem('token' , res.data.token)
      localStorage.setItem('id' , res.data.auth.id)
      push(`/profile/${res.data.auth.id}`)
    } )
    .catch( err => console.log(err))
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    login(values)
    submit();
  };
  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };




  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}  onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={onChange}
            values={values.username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            values={values.password}
            onChange={onChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}








//old stuff
// export default function LoginForm(props) {

//   const startSignUp = {
//     //text inputs//
//     username: "",
//     password: "",
//   };
//   const startFormErrors = {
//     username: "",
//     email: "",
//   };
//   const startDisabled = true;

//   // const { values, change, submit, disabled, errors } = props;
//   const [formValues , disabled, inputChange , formSubmit] = useForm(startSignUp , startFormErrors , startDisabled)
//   const values = formValues
//   const change = inputChange
//   const submit = formSubmit
//   // const errors = formErrors 

//   const onSubmit = (evt) => {
//     evt.preventDefault();
//     submit();
//   };
//   const onChange = (evt) => {
//     const { name, value, type, checked } = evt.target;
//     const valueToUse = type === "checkbox" ? checked : value;
//     change(name, valueToUse);
//   };

//   return (
//     <div>
//       <form className="signUp" onSubmit={onSubmit}>
//         <div>
//           <h2>Login</h2>
//           <label>
//             Name:
//             <input
//               value={values.name}
//               onChange={onChange}
//               name="name"
//               type="text"
//               placeholder="First and Last name"
//             />
//           </label>
//           <label>
//             {" "}
//             Password:
//             <input
//               value={values.password}
//               onChange={onChange}
//               name="password"
//               type="password"
//               placeholder="Please enter your secure password"
//             />
//           </label>
//           <button disabled={disabled}>Sign-Up</button>
//         </div>
//       </form>
//     </div>
//   );
// }
