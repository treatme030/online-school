import React from 'react';
import { Box, Link } from '@mui/material';
import arrow from '../../../assets/chevron-down.svg';
import whiteArrow from '../../../assets/chevron-down-white.svg';
import styles from './styles';

const pages = [
  { title: 'Home', arrow: false, link: '/' },
  { title: 'About', arrow: false },
  { title: 'Course', arrow: true, link: '/course-detail' },
  { title: 'Page', arrow: true },
  { title: 'Blog', arrow: true },
  { title: 'Contact', arrow: false },
];

const Navbar = ({ white }) => {
  return (
    <Box sx={styles.navbar}>
      {pages.map((page, index) => (
        <Link
          key={index}
          href={page.link}
          sx={{ ...styles.link, color: white ? '#fff' : '#000' }}
        >
          {page.title}
          {page.arrow && (
            <Box
              component='img'
              src={white ? whiteArrow : arrow}
              alt='arrow'
              sx={styles.arrow}
            />
          )}
        </Link>
      ))}
    </Box>
  );
};

export default Navbar;
