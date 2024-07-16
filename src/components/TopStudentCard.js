import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

function TopStudentCard({ student, highlight }) {
  return (
    <Box mt={4}>
      <Paper style={{ padding: '20px', backgroundColor: highlight ? '#ffeb3b' : 'white' }}>
        <Typography variant="h6" component="div" gutterBottom>
          <strong>Rank: {student.Rank}</strong>
        </Typography>
        <Typography variant="h5" component="div">
          {student.Name}
        </Typography>
      </Paper>
    </Box>
  );
}

export default TopStudentCard;