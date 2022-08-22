const styles = {
  become: (theme) => ({
    p: '24px 20px',
    [theme.breakpoints.up('lg')]: {
      p: '100px 20px',
    },
  }),
  info: (theme) => ({
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      gap: '70px',
    },
  }),
  content: (theme) => ({
    my: '40px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
      alignItems: 'start',
      mt: 'initial',
    },
  }),
  title: {
    color: '#000',
    fontWeight: 700,
  },
  text: (theme) => ({
    my: '24px',
    [theme.breakpoints.up('lg')]: {
      my: '48px',
    },
  }),
  btn: {
    display: 'flex',
    gap: '10px',
  },
};

export default styles;
