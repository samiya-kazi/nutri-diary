import React from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";

function LoginForm () {
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
        />
         <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

        <Button variant='contained' color="secondary" >Login</Button>
      </div>
    </>
  )
}

export default LoginForm;