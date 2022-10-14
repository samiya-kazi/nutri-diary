import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { signUp } from "../services/apiClientService";

function SignUpForm () {

  let navigate = useNavigate();

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: 'Male',
    age: 0
  };

  const [ state, setState ] = useState(initialState);
  const [ open, setOpen ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setErrorMessage('');
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setState(prevState => ({...prevState, [name]: value}));
  }

  const handleSubmit = () => {
    async function signUpUser (data) {
      try {
        const result = await signUp(data);
        localStorage.setItem('accessToken', result.headers.authorization);
        navigate('/home');
      } catch (error) {
        setOpen(true);
        setErrorMessage(error.response.data);
      }
    }

    signUpUser(state);
  }


  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );



  return (
    <>
      <div className='form-container'>
        <Typography
          variant="h4"
          noWrap
          component="h1"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'flex' },
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
          >
            Sign Up
        </Typography>

        <TextField
          required
          id="firstName"
          label="First Name"
          name='firstName'
          onChange={handleChange}
        />

        <TextField
          required
          id="lastNname"
          label="Last Name"
          name='lastName'
          onChange={handleChange}
        />

        <TextField
          required
          id="email"
          label="Email"
          name='email'
          onChange={handleChange}
        />

        <TextField
          required
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          name='password'
          onChange={handleChange}
        />

        <TextField
          required
          id="c-password"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        />

        <FormControl>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            id="gender"
            label="Gender"
            onChange={handleChange}
            name='gender'
            defaultValue={'Male'}
          >
            <MenuItem value={'Male'}>Male</MenuItem>
            <MenuItem value={'Female'}>Female</MenuItem>
          </Select>
        </FormControl>

        <TextField
          required
          id="age"
          label="Age"
          type="number"
          name='age'
          onChange={handleChange}
        />



        <Button variant='contained' color="secondary" onClick={handleSubmit}>Sign Up</Button>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={errorMessage}
        action={action}
      />
    </>
  )
}

export default SignUpForm;