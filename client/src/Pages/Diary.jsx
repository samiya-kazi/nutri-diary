import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import DiaryEntry from "../Components/DiaryEntry";
import Navbar from "../Components/Navbar";
import { getMeals } from "../services/apiClientService";

function Diary () {

  const [ date, setDate ] = useState(null);

  function handleChange (event) {
    setDate(event.target.value);
  }

  return (
    <>
    <Navbar />
    <div className="date-selection-container">
      <TextField type='date' onChange={handleChange}></TextField>
    </div>
    {date ? <DiaryEntry date={date} /> : 'No date has been selected.'}
    </>
  )
}

export default Diary;