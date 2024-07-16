import React, { useState } from 'react';
import { TextField, Button, Box, Autocomplete } from '@mui/material';

function Search({ students, onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box mt={4}>
      <Autocomplete
        freeSolo
        options={students.map((student) => student['Regd No.'] + ' - ' + student.Name)}
        onInputChange={(event, newInputValue) => {
          setQuery(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter Regd No., Name, or State"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Button variant="contained" color="primary" onClick={handleSearch} style={{ marginTop: '10px' }}>
        Search
      </Button>
    </Box>
  );
}

export default Search;