import React from 'react';
import { Box } from '@mui/material';
import Header from '../header';
import Subscribe from '../subscribe/Subscribe';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Subscribe />
      <Footer />
    </Box>
  );
};

export default Layout;
