const styles = {
  wrapper: (theme) => ({
    mt: '24px',
    [theme.breakpoints.up('md')]: {
      mt: '48px',
    },
  }),
  title: (theme) => ({
    fontWeight: 500,
    color: theme.palette.typography.title,
    textTransform: 'capitalize',
  }),
  desc: (theme) => ({
    color: theme.palette.typography.desc,
    marginTop: '12px',
  }),
};

export default styles;
