import React, { useState } from 'react';
import { Description, ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  Collapse,
  Divider,
  Radio,
  Typography,
} from '@mui/material';

import styles from './styles';

const CourseContent = () => {
  const [checked, setChecked] = useState(false);

  const handleCollapse = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.blockTitle}>
        <Typography variant='h3' sx={styles.title}>
          course content
        </Typography>
        <Button onClick={handleCollapse}>expand all</Button>
      </Box>
      <Typography variant='h3' sx={styles.section}>
        Section 1
      </Typography>
      <Card sx={{ mb: '24px' }}>
        <Box sx={styles.lesson}>
          <Box sx={styles.lessonTitle}>
            <Radio />
            <Typography variant='body2'>lesson 1.1</Typography>
          </Box>
          <Box onClick={handleCollapse} sx={styles.collapseBtn}>
            {checked ? (
              <Box sx={styles.wrapperIcon}>
                Collapse
                <ExpandLess sx={styles.icon} />
              </Box>
            ) : (
              <Box sx={styles.wrapperIcon}>
                Expand
                <ExpandMore sx={styles.icon} />
              </Box>
            )}
          </Box>
        </Box>
        <Collapse in={checked}>
          <Box sx={styles.blockTopic}>
            1 topic
            <Divider orientation='vertical' flexItem sx={styles.divider} />2
            quizzes
          </Box>
          <Box sx={styles.blockInfo}>
            <Typography sx={styles.lessonContent}>
              <Description />
              lesson content
            </Typography>
            <Box sx={styles.blockSteps}>
              0% complate
              <Divider
                orientation='vertical'
                flexItem
                sx={{ borderColor: '#fff', m: '2px 24px' }}
              />
              0/1 steps
            </Box>
          </Box>
          <Box sx={styles.basicTopicLesson}>
            <Radio />
            <Typography variant='body2'>basic topic 1</Typography>
          </Box>
        </Collapse>
      </Card>
      <Card>
        <Box sx={styles.lesson}>
          <Box sx={styles.lessonTitle}>
            <Radio />
            <Typography variant='body2'>lesson 1.2</Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default CourseContent;
