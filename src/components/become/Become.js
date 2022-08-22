import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Wrapper from '../wrapper';

import become_an_instructor from '../../assets/become_an_instructor.svg';
import foto_become from '../../assets/become.png';
import plus from '../../assets/plus_white.svg';
import styles from './styles';

const Become = () => {
  return (
    <Box sx={styles.become}>
      <Wrapper>
        <Box component='img' src={become_an_instructor} alt='circle' />
        <Box sx={styles.info}>
          <Box sx={styles.content}>
            <Typography variant='h2' sx={styles.title}>
              Become an Instructor
            </Typography>
            <Typography variant='body2' sx={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo,
              <br />
              <br />
              vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
              diam quis enim lobortis scelerisque fermentum dui faucibus in
              ornare quam viverra orci
            </Typography>
            <Button sx={styles.btn}>
              <Box component='img' src={plus} />
              Apply Now
            </Button>
          </Box>
          <Box component='img' src={foto_become} sx={{ width: '100%' }} />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Become;
