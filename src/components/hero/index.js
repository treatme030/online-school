import { Box, Button, Card, Link, Typography } from '@mui/material';
import React from 'react';
import Wrapper from '../wrapper';

import styles from './styles';

import banner_photo from '../../assets/banner_photo.png';
import ant_design_play from '../../assets/ant-design_play-circle-filled.svg';
import eye from '../../assets/eye.svg';
import bx_bxs_time from '../../assets/bx_bxs-time.svg';
import el_group from '../../assets/el_group.svg';
import planet from '../../assets/planet.svg';

const Hero = () => {
  return (
    <Box sx={styles.hero}>
      <Wrapper>
        <Box sx={styles.info}>
          <Box
            component='img'
            src={banner_photo}
            alt='banner photo'
            sx={styles.imgBanner}
          />
          <Box>
            <Typography variant='h2' sx={styles.title}>
              A revolutionary way to educate.
            </Typography>
            <Typography variant='body1' sx={{ mt: '48px' }}>
              “Online education is electronically supported learning that relies
              on the Internet for teacher/student interaction and the
              distribution of class materials.”
            </Typography>
            <Box sx={styles.wrapperBtn}>
              <Link sx={styles.link}>
                <Box component='img' src={ant_design_play} alt='play image' />
                <Box component='span'>What’s null?</Box>
              </Link>
              <Button sx={styles.viewBtn}>
                <Box component='img' src={eye} />
                view courses
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.blockCards}>
          <Card sx={styles.card}>
            <Box component='img' src={bx_bxs_time} />
            <Box sx={styles.price}>60,000+</Box>
            <Box>Hours content</Box>
          </Card>
          <Card sx={styles.card}>
            <Box component='img' src={el_group} />
            <Box sx={styles.price}>5,000+</Box>
            <Box>Students</Box>
          </Card>
          <Card sx={styles.card}>
            <Box component='img' src={planet} />
            <Box sx={styles.price}>110+</Box>
            <Box>Countries</Box>
          </Card>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Hero;
