import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Meal from "./Meal";
import { format, parseISO } from 'date-fns';
import { getMeals } from "../services/apiClientService";

function DiaryEntry ({ date }) {

  const [ foodLogs, setFoodLogs ] = useState([]);

  const parsedDate = format(parseISO(date), 'do MMM, yyyy');

  useEffect(() => {
    async function getFoodLogs () {
      try {
        const result = await getMeals(date);
        setFoodLogs(result.data);
      } catch (error) {
        console.log(error);
      }
    }

    getFoodLogs();
  }, [date]);


  function getTotal (field) {
    const result = foodLogs.reduce((acc, log) => acc + log[field], 0);
    return result;
  }

  return (
    <div className='diary-entry-container' >

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
        align:'center'
      }}
      >
        {parsedDate}
    </Typography>


    <TableContainer >
      <Table sx={{ minWidth: 650, maxWidth: 1000, border: 'grey solid 1px', my: '1rem'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Servings</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Sugar&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Meal logs={foodLogs} meal='Breakfast'/>
          <Meal logs={foodLogs} meal='Lunch'/>
          <Meal logs={foodLogs} meal='Dinner'/>
          <Meal logs={foodLogs} meal='Snacks'/>

          <TableRow>
            <TableCell colSpan={2} >Total</TableCell>
            <TableCell align="right">{getTotal('totalCalories')}</TableCell>
            <TableCell align="right">{getTotal('totalFats')}</TableCell>
            <TableCell align="right">{getTotal('totalCarbs')}</TableCell>
            <TableCell align="right">{getTotal('totalProtein')}</TableCell>
            <TableCell align="right">{getTotal('totalSugar')}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default DiaryEntry;