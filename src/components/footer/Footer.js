import React from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import Wrapper from '../wrapper';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../assets/logo.svg';
import styles from './styles';

const navItems = ['About', 'Careers', 'Resource center', 'Guides'];

const footerList = [
  {
    title: 'company',
    items: ['about', 'Parteners', 'careers', 'Teaching Center'],
    icons: false,
  },
  {
    title: 'categories',
    items: ['Classroom courses', 'Video Courses', 'Offline Courses'],
    icons: false,
  },
  { title: 'support', items: ['contact us', 'site feedback'], icons: false },
  { title: 'get In Touch', items: ['Privacy', 'Help', 'Contact'], icons: true },
];

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Wrapper>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          {footerList.map((list, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Typography variant='h3'>{list.title}</Typography>
              <List sx={styles.list}>
                {list.items.map((item, index) => (
                  <ListItem key={index} sx={styles.listItem}>
                    {item}
                  </ListItem>
                ))}
              </List>
              {list.icons && (
                <Box sx={styles.links}>
                  <IconButton>
                    <InstagramIcon sx={styles.icon} />
                  </IconButton>
                  <IconButton>
                    <TwitterIcon sx={styles.icon} />
                  </IconButton>
                  <IconButton>
                    <FacebookIcon sx={styles.icon} />
                  </IconButton>
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
        <Box sx={styles.copyrightInfo}>
          <Box component='img' src={logo} alt='logo' sx={styles.logo} />
          <Typography sx={styles.copyrightText} variant='body1'>
            Copyright © 2020 Turitor. All Right Reserved.
          </Typography>
          <Box>
            <Box sx={styles.nav}>
              {navItems.map((item, index) => {
                return (
                  <Button key={index} sx={styles.linkBtn}>
                    {item}
                  </Button>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Footer;
