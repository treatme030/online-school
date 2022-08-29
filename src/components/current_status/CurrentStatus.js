import React from 'react';
import { Box, Button, Divider, Link, Typography } from '@mui/material';

import styles from './styles';

const CurrentStatus = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.block}>
        <Typography sx={styles.title}>current status</Typography>
        <Button disabled>not enrolled</Button>
      </Box>
      <Divider orientation='vertical' sx={styles.divider} />
      <Box sx={styles.block}>
        <Typography sx={styles.title}>price</Typography>
        <Typography variant='h2' sx={styles.price}>
          $000
        </Typography>
      </Box>
      <Divider orientation='vertical' sx={styles.divider} />
      <Box sx={styles.block}>
        <Typography sx={styles.title}>get started</Typography>
        <Button sx={styles.btn}>take this course</Button>
        <Typography sx={styles.loginLink}>
          Or <Link sx={styles.link}>Login</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default CurrentStatus;
