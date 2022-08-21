import { Box } from '@mui/material';
import React from 'react';

const styles = {
  wrapper: {
    maxWidth: '1240px',
    margin: 'auto',
    p: '20px',
  },
};

const Wrapper = ({ children }) => {
  return <Box sx={styles.wrapper}>{children}</Box>;
};

export default Wrapper;
