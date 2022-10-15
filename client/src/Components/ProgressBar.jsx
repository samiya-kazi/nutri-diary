import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel({ value }) {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${value}%`}</Typography>
      </Box>
    </Box>
  );
}


export default function ProgressBar ({ currCal, calGoal }) {

  const progress = Math.round((currCal / calGoal) * 100);

  return (
    <Box sx={{ width: '30%' }}>
      <LinearProgressWithLabel value={progress} />
      { 'Calorie Goal: ' + currCal + '/' + calGoal }
    </Box>
  );
}