const styles = {
  wrapper: {
    mt: '48px',
  },
  title: (theme) => ({
    fontWeight: 500,
    color: theme.palette.typography.title,
    textTransform: 'capitalize',
    mb: '10px',
  }),
  listItem: {
    pl: '0px',
  },
  icon: (theme) => ({
    color: theme.palette.primary.dark,
    width: '10px',
  }),
  listItemText: (theme) => ({
    color: theme.palette.typography.desc,
    fontSize: '14px',
    lineHeight: '17px',
    ml: '10px',
  }),
};

export default styles;
