import React from 'react';
import { Box, IconButton } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import close from '../../../assets/close.svg';
import Navbar from '../navbar/Navbar';

const Drawer = ({ open, onClose }) => {
  return (
    <MuiDrawer
      anchor='left'
      open={open}
      PaperProps={{ sx: { width: '100%' }, zIndex: 4 }}
    >
      <Box sx={{ p: '20px' }}>
        <IconButton onClick={onClose}>
          <Box component='img' alt='close' src={close} />
        </IconButton>
        <Box sx={{ mt: '24px' }}>
          <Navbar />
        </Box>
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
