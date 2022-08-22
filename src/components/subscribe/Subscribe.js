import React from 'react';
import { Box, Button, InputBase, Paper, Typography } from '@mui/material';
import Wrapper from '../wrapper';

import styles from './styles';

const Subscribe = () => {
  return (
    <Box sx={styles.subscribe}>
      <Wrapper>
        <Box sx={styles.info}>
          <Typography variant='h2' sx={styles.title}>
            Subscribe For Get Update
            <br />
            Every New Courses
          </Typography>
          <Typography variant='body1' sx={styles.text}>
            <span>10k+ students daily learn with Eduvi.</span>
            <span> Subscribe for new courses.</span>
          </Typography>
          <Paper component='form' sx={styles.paper}>
            <InputBase
              placeholder='enter your email'
              inputProps={{ 'aria-label': 'enter your email' }}
              sx={styles.inputBase}
            />
            <Button sx={styles.btn}>Subscribe</Button>
          </Paper>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Subscribe;
