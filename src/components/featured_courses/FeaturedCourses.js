import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import Wrapper from '../wrapper';

import eye from '../../assets/eye.svg';
import styles from './styles';
import FeaturedCards from '../featured_cards/FeaturedCards';

const FeaturedCourses = () => {
  return (
    <Box>
      <Wrapper>
        <Box sx={styles.wrapper}>
          <Box sx={styles.content}>
            <Box>
              <Typography sx={styles.topTitle}>#Top Courses</Typography>
              <Typography variant='h2' sx={styles.title}>
                Featured Courses
              </Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Typography variant='body1' sx={styles.text}>
              Online learning offers a new way to explore subjects you’re
              passionate about.
            </Typography>
          </Box>
          <Button sx={styles.btn}>
            <Box component='img' src={eye} />
            View All
          </Button>
        </Box>
        <FeaturedCards />
      </Wrapper>
    </Box>
  );
};

export default FeaturedCourses;
