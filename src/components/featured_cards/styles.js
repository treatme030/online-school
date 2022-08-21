const styles = {
  card: (theme) => ({
    border: `0.5px solid ${theme.palette.primary.main}`,
    boxShadow: '0px 4px 4px rgba(0,0,0,0.2)',
    borderRadius: '8px',
    p: '24px 24px 48px',
  }),
  lang: {
    my: '24px',
    color: '#000',
    textAlign: 'center',
  },
  divider: (theme) => ({
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    mb: '24px',
  }),
  desc: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '16px',
    lineHeight: '20px',
  },
  price: (theme) => ({
    backgroundColor: theme.palette.primary.dark,
    p: '8px',
    color: '#fff',
    borderRadius: '5px',
  }),
  link: {
    display: 'flex',
    alignItems: 'center',
    color: '#000',
    textTransform: 'uppercase',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 500,
    textDecorationColor: '#000',
    '&>img': {
      ml: '10px',
    },
  },
};

export default styles;
