import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CssBaseline, Toolbar, Typography, MenuItem, Select } from '@mui/material';
import HomePage from './components/HomePage';
import StatisticsPage from './components/StatisticsPage';
import TGPA from './TGPA.csv';
import Papa from 'papaparse';




function App() {
  const [students, setStudents] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [topStudents, setTopStudents] = useState([]);
  const [stateFilter, setStateFilter] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [page, setPage] = useState('home');

  // Load CSV data
  useEffect(() => {
    Papa.parse(TGPA, {
      download: true,
      header: true,
      complete: (results) => {
        const data = results.data;
        // Sort students by CGPA in descending order and assign ranks
        data.sort((a, b) => parseFloat(b.Cgpa) - parseFloat(a.Cgpa));
        data.forEach((student, index) => {
          student.Rank = index + 1;
        });
        setStudents(data);
        setTopStudents(data.slice(0, 10)); // Top 10 students

        // Calculate statistics
        const totalCGPA = data.reduce((sum, student) => sum + parseFloat(student.Cgpa), 0);
        const avgCGPA = (totalCGPA / data.length).toFixed(2);
        const highestCGPA = Math.max(...data.map(student => parseFloat(student.Cgpa))).toFixed(2);
        setStatistics({
          totalStudents: data.length,
          avgCGPA,
          highestCGPA,
        });
      },
    });
  }, []);

  const handleSearch = (query) => {
    const [regdNo, name] = query.split(' - ');
    const result = students.find(
      (student) => student['Regd No.'] === regdNo || student.Name.toLowerCase() === name?.toLowerCase() || student.State.toLowerCase() === query.toLowerCase()
    );
    setSearchResult(result);
  };

  const handleStateFilterChange = (event) => {
    const state = event.target.value;
    setStateFilter(state);
    if (state) {
      setFilteredStudents(students.filter(student => student.State === state));
    } else {
      setFilteredStudents([]);
    }
  };

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  return (
    <Router>
      <CssBaseline />
      {/* <AppBar position="static"> */}
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {/* RankDekho */}
          </Typography>
          <Select value={page} onChange={handlePageChange} style={{ color: 'black' }}>
            <MenuItem value="home">
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
            </MenuItem>
            <MenuItem value="statistics">
              <Link to="/statistics" style={{ textDecoration: 'none', color: 'inherit' }}>Statistics</Link>
            </MenuItem>
          </Select>
        </Toolbar>
      {/* </AppBar> */}
      <Routes>
        <Route path="/" element={<HomePage students={students} topStudents={topStudents} searchResult={searchResult} handleSearch={handleSearch} />} />
        <Route path="/statistics" element={<StatisticsPage students={students} stateFilter={stateFilter} handleStateFilterChange={handleStateFilterChange} filteredStudents={filteredStudents} statistics={statistics} />} />
      </Routes>
    </Router>
  );
}

export default App;