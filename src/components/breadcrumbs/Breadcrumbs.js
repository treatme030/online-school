import React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from '@mui/material';
import styles from './styles';

const Breadcrumbs = () => {
  return (
    <MuiBreadcrumbs sx={styles.breadcrumbs}>
      <Link sx={styles.link}>Home</Link>
      <Link sx={styles.link}>Course</Link>
      <Link sx={styles.link}>Lorem ipsum dolor sit</Link>
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
