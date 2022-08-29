const styles = {
  wrapper: (theme) => ({
    background: '#E7E7E7',
    borderRadius: '4px',
    p: '24px',
    m: '38px auto 0',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'space-between',
      mt: '40px',
      width: '100%',
      minWidth: '210px',
    },
  }),
  block: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '24px',
    textTransform: 'capitalize',
    color: '#000',
    my: '14px',
  },
  price: {
    fontWeight: 500,
    color: '#000',
  },
  divider: (theme) => ({
    orientation: 'horizontal',
    mt: '24px',
    width: 'initial',
    height: '2px',
    background: theme.palette.primary.dark,
    [theme.breakpoints.up('md')]: {
      orientation: 'vertical',
      m: 0.5,
      width: '2px',
      height: 'initial',
    },
  }),
  btn: {
    fontSize: '16px',
    lineHeight: '20px',
  },
  loginLink: {
    m: '18px 0',
    color: '#000',
  },
  link: {
    fontSize: '20px',
    lineHeight: '24px',
    textTransform: 'capitalize',
    ml: '5px',
  },
};

export default styles;
