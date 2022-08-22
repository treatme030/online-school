import img_bg from '../../assets/images.png';

const styles = {
  subscribe: {
    pb: '100px',
  },
  info: (theme) => ({
    background: theme.palette.primary.dark,
    p: '48px 15px',
    borderRadius: '20px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      background: `${theme.palette.primary.dark} url(${img_bg}) no-repeat center`,
      p: '92px 0px 48px',
    },
  }),
  title: {
    fontWeight: 700,
  },
  text: (theme) => ({
    mt: '12px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      mt: '48px',
    },
  }),
  paper: (theme) => ({
    m: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    background: 'none',
    gap: '10px',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '670px',
      borderRadius: '8px',
      gap: '0px',
    },
  }),
  inputBase: (theme) => ({
    width: '100%',
    p: '8px 19px',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '24px',
    background: '#fff',
    borderRadius: '8px',
    [theme.breakpoints.up('md')]: {
      borderRadius: '8px 0 0 8px',
    },
  }),
  btn: (theme) => ({
    borderRadius: '8px',
    background: theme.palette.primary.main,
    border: 'none',
    fontSize: '20px',
    lineHeight: '24px',
    [theme.breakpoints.up('md')]: {
      borderRadius: '0px 8px 8px 0px',
      px: '26px',
    },
  }),
};

export default styles;
