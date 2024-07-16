import React from 'react';
import { Container, TextField, MenuItem, Box, Paper, Typography, Grid } from '@mui/material';
import Result from './Result';

function StatisticsPage({ students, stateFilter, handleStateFilterChange, filteredStudents, statistics }) {
  return (
    <Container>
      <Box mt={4} mb={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Statistics and Filters
        </Typography>
      </Box>
      <TextField
        select
        label="Filter by State"
        value={stateFilter}
        onChange={handleStateFilterChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="">All States</MenuItem>
        {[...new Set(students.map(student => student.State))].map(state => (
          <MenuItem key={state} value={state}>{state}</MenuItem>
        ))}
      </TextField>
      <Box mt={4}>
        <Paper style={{ padding: '20px' }}>
          <Typography variant="h6">Statistics</Typography>
          <Typography>Total Students: {statistics.totalStudents}</Typography>
          <Typography>Average CGPA: {statistics.avgCGPA}</Typography>
          <Typography>Highest CGPA: {statistics.highestCGPA}</Typography>
        </Paper>
      </Box>
      <Grid container spacing={2}>
        {filteredStudents.map(student => (
          <Grid item xs={12} sm={6} md={4} key={student['Regd No.']}>
            <Result student={student} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default StatisticsPage;