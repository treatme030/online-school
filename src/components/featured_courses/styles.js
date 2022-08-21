const styles = {
  wrapper: (theme) => ({
    p: '350px 0px 24px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      py: '100px',
    },
  }),
  content: (theme) => ({
    color: theme.palette.primary.main,
    mb: '15px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'initial',
      gap: '24px',
    },
  }),
  topTitle: (theme) => ({
    fontWeight: 500,
    color: theme.palette.primary.main,
  }),
  title: (theme) => ({
    mt: '14px',
    fontWeight: 500,
    color: theme.palette.primary.dark,
  }),
  divider: (theme) => ({
    orientation: 'horizontal',
    backgroundColor: theme.palette.primary.dark,
    height: '2px',
    width: '100px',
    my: '15px',
    [theme.breakpoints.up('md')]: {
      orientation: 'vertical',
      height: '100px',
      width: '2px',
    },
  }),
  text: (theme) => ({
    color: 'inherit',
    [theme.breakpoints.up('md')]: {
      maxWidth: '450px',
    },
  }),
  btn: {
    display: 'flex',
    gap: '10px',
  },
};

export default styles;
