import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './styles';

const CourseDescription = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography variant='h3' sx={styles.title}>
        Course Details
      </Typography>
      <Typography sx={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis consectetur adipiscing elit. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        Risus commodo viverra maecenas accumsan.
      </Typography>
    </Box>
  );
};

export default CourseDescription;
