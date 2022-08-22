import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import Wrapper from '../wrapper';

import foto_group from '../../assets/Group.png';
import foro_1 from '../../assets/group1.svg';
import foro_2 from '../../assets/group2.svg';
import foro_3 from '../../assets/group3.svg';

import styles from './styles';

const info = [
  {
    img: foro_1,
    title: 'Online Degrees',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,',
  },
  {
    img: foro_2,
    title: 'Short courses',
    text: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    img: foro_3,
    title: 'Expert Traning',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,',
  },
];

const Benefits = () => {
  return (
    <Box sx={styles.benefits}>
      <Wrapper>
        <Box sx={styles.info}>
          <Box
            component='img'
            src={foto_group}
            sx={{ width: '100%', maxWidth: '575px' }}
          />
          <Box>
            <Typography variant='h1' sx={styles.title}>
              Benifits from our online learning
            </Typography>
            <List sx={styles.content}>
              {info.map((item, index) => (
                <ListItem key={index} sx={styles.infoItem}>
                  <Box component='img' src={item.img} />
                  <Box>
                    <Typography sx={styles.itemTitle}>{item.title}</Typography>
                    <Typography sx={styles.itemDesc}>{item.text}</Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Benefits;
