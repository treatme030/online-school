import { Search } from '@mui/icons-material';
import { IconButton, InputBase, Paper } from '@mui/material';
import React from 'react';

const styles = {
  paper: {
    display: { xs: 'none', lg: 'flex' },
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '275px',
    p: '2px 4px',
  },
};

const SearchInput = () => {
  return (
    <Paper component='form' sx={styles.paper}>
      <InputBase placeholder='Search' inputProps={{ 'aria-label': 'search' }} />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
