import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import Search from './Search';
import Result from './Result';
import TopStudentCard from './TopStudentCard';

function HomePage({ students, topStudents, searchResult, handleSearch }) {
  return (
    <Container>
      <Box mt={4} mb={4}>
        <Typography variant="h2" align="center" gutterBottom>
          RankDekho
        </Typography>
        <Search students={students} onSearch={handleSearch} />
      </Box>
      {searchResult && <Result student={searchResult} />}
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Top 10 Students
        </Typography>
        <Grid container spacing={2}>
          {topStudents.map((student, index) => (
            <Grid item xs={12} sm={6} md={4} key={student['Regd No.']}>
              <TopStudentCard student={student} highlight={index < 3} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default HomePage;