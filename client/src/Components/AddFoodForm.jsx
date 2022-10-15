import React, { useState } from "react";
import { Box, Button, TextField, Typography, Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { addFoodToMeal } from "../services/apiClientService";
import { useNavigate } from 'react-router-dom';

function AddFoodForm ({ selectedFood }) {

  let navigate = useNavigate();

  const initialState = {
    date: '',
    meal: '',
    servings: 1
  }

  const [ state, setState ] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState(prevState => ({...prevState, [name]: value}));
  }


  const handleSubmit = async () => {
    try {
      if (selectedFood && state.date !== '' && state.meal != '') {
        const data = {...state, foodId: selectedFood._id}
        const result = await addFoodToMeal(data);
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Box xs={{width: '100vw', display: 'flex'}}>

    <Typography
      variant="h5"
      noWrap
      component="h1"
      sx={{
        mr: 2,
        display: { xs: 'flex', md: 'flex' },
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        align:'center'
      }}
      >
        {selectedFood ? selectedFood.name : 'Please select an item.'}
    </Typography>


      {selectedFood && ('Serving Size: ' + selectedFood.servingSize)}
      {selectedFood && ('Calories: ' + selectedFood.calories) + ' kCal'}
      {selectedFood && ('Carbs: ' + selectedFood.carbs) + ' g'}
      {selectedFood && ('Fat: ' + selectedFood.fats) + ' g'}
      {selectedFood && ('Protein: ' + selectedFood.protein) + ' g'}
      {selectedFood && ('Sugar: ' + selectedFood.sugar) + ' g'}


      <TextField
        required
        id="servings"
        label="Number of servings"
        type="number"
        name='servings'
        onChange={handleChange}
      />

      <FormControl>
        <InputLabel id="meal-label">Meal</InputLabel>
        <Select
          labelId="meal-label"
          id="meal"
          label="Meal"
          onChange={handleChange}
          name='meal'
          defaultValue={'Breakfast'}
        >
          <MenuItem value={'Breakfast'}>Breakfast</MenuItem>
          <MenuItem value={'Lunch'}>Lunch</MenuItem>
          <MenuItem value={'Dinner'}>Dinner</MenuItem>
          <MenuItem value={'Snack'}>Snack</MenuItem>
        </Select>
       </FormControl>

       <InputLabel id="date-label">Date</InputLabel>
       <TextField
          required
          labelId="date-label"
          id="date"
          type="date"
          name='date'
          onChange={handleChange}
      />

      <Button onClick={handleSubmit}>Add Food</Button>
    </Box>
    </>
  )
}

export default AddFoodForm;