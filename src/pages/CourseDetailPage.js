import { Box, Typography } from '@mui/material';
import React from 'react';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Wrapper from '../components/wrapper';

import imageslearn from '../assets/imageslearn.png';
import CurrentStatus from '../components/current_status/CurrentStatus';
import CourseDescription from '../components/course_description/CourseDescription';
import LearnCourse from '../components/learn_course/LearnCourse';
import CourseContent from '../components/course_content/CourseContent';

const styles = {
  wrapper: (theme) => ({
    pt: '24px',
    [theme.breakpoints.up('md')]: {
      pt: '96px',
      display: 'flex',
      objectFit: 'cover',
    },
  }),
  img: {
    width: '100%',
    minHeight: '396px',
  },
  leftBlock: {},
};

const CourseDetailPage = () => {
  return (
    <Box sx={{ pt: '90px' }}>
      <Wrapper>
        <Box>
          <Typography variant='h1' textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
          <Breadcrumbs />
        </Box>
        <Box sx={styles.wrapper}>
          <Box sx={styles.leftBlock}>
            <Box
              component='img'
              src={imageslearn}
              alt='learn image'
              sx={styles.img}
            />
            <CurrentStatus />
            <CourseDescription />
            <LearnCourse />
            <CourseContent />
          </Box>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default CourseDetailPage;
