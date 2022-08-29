import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

const breakpoints = createBreakpoints({});
const theme = createTheme({
  palette: {
    primary: {
      main: '#9980B7',
      dark: '#673F86',
    },
    typography: {
      title: '#0A033C',
      desc: '#5D5A6F',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Montserrat,sans-serif',
      fontWeight: 700,
      fontSize: '36px',
      lineHeight: '55px',
      textTransform: 'capitalize',
      color: '#000',
    },
    h2: {
      fontSize: '24px',
      lineHeight: '29px',
      textTransform: 'capitalize',
      [breakpoints.up('md')]: {
        fontSize: '36px',
        lineHeight: '44px',
      },
    },
    h3: {
      fontFamily: 'Montserrat,sans-serif',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '20px',
      textTransform: 'uppercase',
      color: '#fff',
      [breakpoints.up('md')]: {
        fontSize: '24px',
        lineHeight: '29px',
      },
    },
    body1: {
      color: '#fff',
      fontSize: '14px',
      lineHeight: '17px',
      [breakpoints.up('md')]: {
        fontSize: '18px',
        lineHeight: '22px',
      },
    },
    body2: {
      fontFamily: 'Montserrat,sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#000000',
      [breakpoints.up('md')]: {
        fontSize: '20px',
        lineHeight: '24px',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          background: '#673F86',
          borderRadius: '8px',
          border: '2px solid #673F86',
          padding: '14px',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '24px',
          textTransform: 'capitalize',
          color: '#FFFFFF',
          '&:hover': {
            background: '#9980B7',
          },
          '&:disabled': {
            background: '#9980B7',
            color: '#FFFFFF',
          },
        },
      },
    },
  },
});

export default theme;
