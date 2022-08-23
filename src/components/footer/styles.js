const styles = {
  footer: (theme) => ({
    pt: '24px',
    background: theme.palette.primary.dark,
    [theme.breakpoints.up('lg')]: {
      padding: '76px 20px 24px',
    },
  }),
  list: {
    mb: '20px',
  },
  listItem: (theme) => ({
    p: '6px 0px',
    textTransform: 'capitalize',
    [theme.breakpoints.up('lg')]: {
      p: '12px 0px',
    },
  }),
  copyrightInfo: (theme) => ({
    mt: '40px',
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }),
  copyrightText: {
    m: '10px 0px',
  },
  links: {
    ml: '-8px',
  },
  icon: {
    color: '#fff',
  },
};

export default styles;
