import {
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';

import photo_card from '../../assets/photo_card.png';
import plus from '../../assets/plus.svg';
import styles from './styles';

const FeaturedCards = () => {
  return (
    <Box>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={3}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Card sx={styles.card}>
              <CardMedia
                compornet='img'
                image={`${photo_card}`}
                alt='course image'
                sx={{ height: '266px', borderRadius: '8px' }}
              />
              <Box>
                <Typography variant='body2' sx={styles.lang}>
                  Language Writing
                </Typography>
                <Divider orientation='horizontal' sx={styles.divider} />
                <Box sx={styles.desc}>
                  <Box sx={styles.price}>$ 100</Box>
                  <Link sx={styles.link}>
                    <Box component='span'>enroll now</Box>
                    <Box component='img' src={plus} alt='plus image' />
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedCards;
