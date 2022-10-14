import React from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function Meal ({ logs, meal }) {
  return (
    <>
    <TableRow>
      <TableCell colSpan={7} align='center'>{meal}</TableCell>
    </TableRow>
          {logs.map((row) => {
            if (row.meal === meal) return (
              <TableRow
                key={row.foodName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.foodName}</TableCell>
                <TableCell>{row.servings}</TableCell>
                <TableCell align="right">{row.totalCalories}</TableCell>
                <TableCell align="right">{row.totalFats}</TableCell>
                <TableCell align="right">{row.totalCarbs}</TableCell>
                <TableCell align="right">{row.totalProtein}</TableCell>
                <TableCell align="right">{row.totalSugar}</TableCell>
              </TableRow>
          )
          else return null})}
    </>
  )
}

export default Meal;