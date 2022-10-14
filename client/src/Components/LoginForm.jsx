import React from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { login } from "../services/apiClientService";

function LoginForm () {
  const initialState = {
    email: '',
    password: '',
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
    async function loginUser (data) {
      try {
        const result = await login(data);
        localStorage.setItem('accessToken', result.headers.authorization);
      } catch (error) {
        setOpen(true);
        setErrorMessage(error.response.data);
      }
    }

    loginUser(state);
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
            Login
        </Typography>

        <TextField
          required
          id="email"
          label="Email"
          name='email'
          onChange={handleChange}
        />
         <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          name='password'
          onChange={handleChange}
        />

        <Button type='submit' variant='contained' color="secondary" onClick={handleSubmit}>Login</Button>
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

export default LoginForm;