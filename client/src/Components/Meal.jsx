import React from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { IconButton } from "@mui/material";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { deleteFoodFromMeal } from "../services/apiClientService";

function Meal ({ logs, meal, setFoodLogs }) {

  const handleDelete = async(id) => {
    try {
      await deleteFoodFromMeal(id);

      setFoodLogs(prevState => {
        const newState = prevState.filter(row => row._id !== id);
        return newState;
      })

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
    <TableRow>
      <TableCell colSpan={8} align='center'>{meal}</TableCell>
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
                <TableCell align="right">
                  <IconButton onClick={() => handleDelete(row._id)}>
                    <DeleteForeverRoundedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
          )
          else return null})}
    </>
  )
}

export default Meal;