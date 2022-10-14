import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getMeals } from "../services/apiClientService";

function DiaryEntry ({ date }) {

  const [ foodLogs, setFoodLogs ] = useState([]);

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


  return (
    <>
    <TableContainer >
      <Table sx={{ minWidth: 650, maxWidth: 1000 }} aria-label="simple table">
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
          <TableRow>Breakfast</TableRow>
          {foodLogs.map((row) => {
            if (row.meal === 'Breakfast') return (
              <TableRow
                key={row.foodName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.foodName}
                </TableCell>
                <TableCell>{row.servings}</TableCell>
                <TableCell align="right">{row.totalCalories}</TableCell>
                <TableCell align="right">{row.totalFats}</TableCell>
                <TableCell align="right">{row.totalCarbs}</TableCell>
                <TableCell align="right">{row.totalProtein}</TableCell>
                <TableCell align="right">{row.totalSugar}</TableCell>
              </TableRow>
          )})}

          <TableRow>Lunch</TableRow>
          {foodLogs.map((row) => {
            if (row.meal === 'Lunch') return (
              <TableRow
                key={row.foodName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.foodName}
                </TableCell>
                <TableCell>{row.servings}</TableCell>
                <TableCell align="right">{row.totalCalories}</TableCell>
                <TableCell align="right">{row.totalFats}</TableCell>
                <TableCell align="right">{row.totalCarbs}</TableCell>
                <TableCell align="right">{row.totalProtein}</TableCell>
                <TableCell align="right">{row.totalSugar}</TableCell>
              </TableRow>
          )})}

          <TableRow>Dinner</TableRow>
          {foodLogs.map((row) => {
            if (row.meal === 'Dinner') return (
              <TableRow
                key={row.foodName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.foodName}
                </TableCell>
                <TableCell>{row.servings}</TableCell>
                <TableCell align="right">{row.totalCalories}</TableCell>
                <TableCell align="right">{row.totalFats}</TableCell>
                <TableCell align="right">{row.totalCarbs}</TableCell>
                <TableCell align="right">{row.totalProtein}</TableCell>
                <TableCell align="right">{row.totalSugar}</TableCell>
              </TableRow>
          )})}

          <TableRow>Snacks</TableRow>
          {foodLogs.map((row) => {
            if (row.meal === 'Snacks') return (
              <TableRow
                key={row.foodName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.foodName}
                </TableCell>
                <TableCell>{row.servings}</TableCell>
                <TableCell align="right">{row.totalCalories}</TableCell>
                <TableCell align="right">{row.totalFats}</TableCell>
                <TableCell align="right">{row.totalCarbs}</TableCell>
                <TableCell align="right">{row.totalProtein}</TableCell>
                <TableCell align="right">{row.totalSugar}</TableCell>
              </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default DiaryEntry;