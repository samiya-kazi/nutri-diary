import React from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SignUpForm () {

  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

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
          id="fname"
          label="First Name"
        />

        <TextField
          required
          id="lname"
          label="Last Name"
        />

        <TextField
          required
          id="email"
          label="Email"
        />

        <TextField
          required
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
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
            value={gender}
            label="Gender"
            onChange={handleChange}
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
        />



        <Button variant='contained' color="secondary" >Sign Up</Button>
      </div>
    </>
  )
}

export default SignUpForm;