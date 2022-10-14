import React from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { useState } from "react";
import { login } from "../services/apiClientService";

function LoginForm () {
  const initialState = {
    email: '',
    password: '',
  };

  const [ state, setState ] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState(prevState => ({...prevState, [name]: value}));
  }


  const handleSubmit = () => {
    async function loginUser (data) {
      const result = await login(data);

      localStorage.setItem('accessToken', result.headers.authorization);
    }

    loginUser(state);
  }


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
    </>
  )
}

export default LoginForm;