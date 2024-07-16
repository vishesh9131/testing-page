import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

function Result({ student, highlight }) {
  return (
    <Box mt={4}>
      <Paper style={{ padding: '20px', backgroundColor: highlight ? '#ffeb3b' : 'white' }}>
        <Typography variant="h6" component="div" gutterBottom>
          Student Details
        </Typography>
        <Typography variant="h4" component="div" gutterBottom>
          <strong>Rank: {student.Rank}</strong>
        </Typography>
        <Typography>Regd No.: {student['Regd No.']}</Typography>
        <Typography>Name: {student.Name}</Typography>
        <Typography>Father Name: {student['Father Name']}</Typography>
        <Typography>Mother Name: {student['Mother Name']}</Typography>
        <Typography>Program: {student.Program}</Typography>
        <Typography>Program Type: {student.ProgramType}</Typography>
        <Typography>Batch Year: {student.BatchYear}</Typography>
        <Typography>Program Duration: {student['Program Duration']}</Typography>
        <Typography>Gender: {student.Gender}</Typography>
        <Typography>Country: {student.Country}</Typography>
        <Typography>State: {student.State}</Typography>
        <Typography>Section: {student.Section}</Typography>
        <Typography>CGPA: {student.Cgpa}</Typography>
      </Paper>
    </Box>
  );
}

export default Result;