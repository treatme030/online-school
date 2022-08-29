import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from './styles';

const LearnCourse = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography variant='h3' sx={styles.title}>
        What you'll learn in this course:
      </Typography>
      <List>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <ListItem key={index} sx={styles.listItem}>
            <FiberManualRecordIcon sx={styles.icon} />
            <Typography sx={styles.listItemText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default LearnCourse;
