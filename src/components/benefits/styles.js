import benefits_bg from '../../assets/benefits_bg.svg';
import benefits_bg_1 from '../../assets/benefits_bg_1.svg';

const styles = {
  benefits: (theme) => ({
    background: theme.palette.primary.main,
    p: '50px 0px',
    [theme.breakpoints.up('lg')]: {
      my: '40px',
    },
  }),
  info: (theme) => ({
    pt: '120px',
    pb: '390px',
    textAlign: 'center',
    background: `url(${benefits_bg}) right bottom 10px no-repeat, url(${benefits_bg_1}) left top no-repeat`,
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      gap: '70px',
      py: '50px',
      background: `url(${benefits_bg}) right bottom 10px no-repeat,url(${benefits_bg_1}) left top no-repeat`,
    },
  }),
  content: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
  }),
  title: (theme) => ({
    mt: '48px',
    mb: '24px',
    color: '#fff',
    [theme.breakpoints.up('lg')]: {
      mt: 'initial',
      maxWidth: '459px',
    },
  }),
  infoItem: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'row',
      gap: '20px',
    },
  }),
  itemTitle: (theme) => ({
    fontSize: '24px',
    lineHeight: '29px',
    fontWeight: 700,
    mb: '12px',
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      textAlign: 'initial',
    },
  }),
  itemDesc: (theme) => ({
    textAlign: 'center',
    fontSize: '20px',
    lineHeight: '24px',
    [theme.breakpoints.up('lg')]: {
      textAlign: 'initial',
      maxWidth: '360px',
    },
  }),
};

export default styles;
