import { Box, TextField, Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from "react";
import { useState } from "react";
import { getFoodSearch } from "../services/apiClientService";

function FoodSearch ({ setSelectedFood }) {

  const [ search, setSearch ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);

  const handleResultChange = (event) => {
    const foodId = event.target.value;
    const food = searchResults.filter(food => food._id === foodId)[0];
    setSelectedFood(food);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  }


  const handleSubmit = async () => {
    try {
      const results = await getFoodSearch(search);
      setSearchResults(results.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Box xs={{width: '100vw', display: 'flex'}}>
      <TextField
          id="search"
          label="Search Food"
          name='search'
          onChange={handleChange}
        />
      <Button onClick={handleSubmit} >Search</Button>
    </Box>
    <Box>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Results</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={handleResultChange}
        >
          {searchResults.map(result => 
            <FormControlLabel key={result._id} value={result._id} control={<Radio />} label={result.name + ' (' + result.servingSize + ')'} />
          )}

        </RadioGroup>
      </FormControl>
    </Box>
    </>
  )
}

export default FoodSearch;