import { Box } from '@mui/material';
import React from 'react';
import Become from '../components/become/Become';
import Benefits from '../components/benefits/Benefits';
import FeaturedCourses from '../components/featured_courses/FeaturedCourses';
import Hero from '../components/hero';

const HomePage = () => {
  return (
    <Box>
      <Hero />
      <FeaturedCourses />
      <Benefits />
      <Become />
    </Box>
  );
};

export default HomePage;
