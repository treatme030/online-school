import React from 'react';
import { useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import Drawer from './drawer/Drawer';
import Navbar from './navbar/Navbar';
import SearchInput from './searchInput/SearchInput';

import logo_desk from '../../assets/logo.svg';
import logo_mob from '../../assets/logo-mobile.svg';
import shopping_cart from '../../assets/shopping-cart.svg';
import user_info from '../../assets/user-info.svg';
import MenuIcon from '@mui/icons-material/Menu';

const styles = {
  appBar: (theme) => ({
    boxShadow: 'none',
    background: theme.palette.primary.dark,
    [theme.breakpoints.up('lg')]: {
      padding: '48px 0',
    },
  }),
};

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar position='static' sx={styles.appBar}>
      <Container maxWidth='xl'>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <Typography
            component='a'
            variant='h6'
            href='/'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Box component='img' src={logo_desk} />
          </Typography>
          <IconButton
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-start',
            }}
            color='inherit'
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='a'
            variant='h6'
            href='/'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Box component='img' src={logo_mob} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', lg: 'flex' },
              paddingLeft: '80px',
            }}
          >
            <Navbar white />
          </Box>
          <SearchInput />
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              ml: '15px',
            }}
          >
            <IconButton>
              <Box component='img' src={shopping_cart} />
            </IconButton>
            <IconButton
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
              }}
            >
              <Box component='img' src={user_info} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
