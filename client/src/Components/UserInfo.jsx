import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { getCurrentUserGoals, postUserGoals } from '../services/apiClientService';

function UserInfo ({ info, setInfo }) {

  const initialState = {
    weight: info.weight ? info.weight : null,
    weightGoal: info.weightGoal ? info.weightGoal : null,
    height: info.height ? info.height : null,
  }

  const [ state, setState ] = useState(initialState);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setState(prevState => ({...prevState, [name]: value}));
  }


  const handleSubmit = async () => {
    try {
      console.log(state);
      await postUserGoals(state);
      const newInfo = await getCurrentUserGoals();

      setInfo(prevState => ({...prevState, ...newInfo.data}));
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
    <Box>
        <p>{'ID: ' + (info._id ? info._id : null)}</p>
        <p>{'Height: ' + (info.height ? info.height : null)}</p>
        <p>{'Weight: ' + (info.weight ? info.weight : null)}</p>
        <p>{'Weight Goal: ' + (info.weightGoal ? info.weightGoal : null)}</p>
        <p>{'Basal Calories: ' + (info.basalCal ? info.basalCal : null)}</p>
        <p>{'Calorie Goal: ' + (info.calGoal ? info.calGoal : null)}</p>
    </Box>
    <Box>
      <form>
        <TextField
          required
          id="weight"
          label="Weight (kg)"
          type="number"
          name='weight'
          onChange={handleChange}
        />

        <TextField
          required
          id="height"
          label="Height (cm)"
          type="number"
          name='height'
          onChange={handleChange}
        />

        <TextField
          required
          id="weightGoal"
          label="Weight Goal (kg)"
          type="number"
          name='weightGoal'
          onChange={handleChange}
        />

        <Button onClick={handleSubmit}>Update</Button>
      </form>
    </Box>
    </>
  )
}

export default UserInfo;