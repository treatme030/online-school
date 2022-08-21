import banner_bg from '../../assets/banner_bg.svg';
import banner_bg_mob from '../../assets/banner_bg_mob.svg';
import banner_circle_bg from '../../assets/banner_circle_bg.svg';

const styles = {
  hero: (theme) => ({
    position: 'relative',
    p: '23px 20px 100px',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '1770px',
      maxHeight: '1770px',
      background: `url(${banner_bg_mob}) no-repeat`,
      backgroundSize: 'cover',
      [theme.breakpoints.up('lg')]: {
        background: `no-repeat url(${banner_bg})`,
        height: '990px',
        maxHeight: '990px',
        backgroundSize: 'cover',
      },
      [theme.breakpoints.up('sm')]: {
        background: `url(${banner_bg}) no-repeat`,
        height: '1500px',
        maxHeight: '1500px',
        backgroundSize: 'cover',
      },
    },
  }),
  info: (theme) => ({
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      gap: '70px',
      textAlign: 'left',
    },
  }),
  imgBanner: {
    width: '100%',
    minWidth: '375px',
    minHeight: '488px',
  },
  title: (theme) => ({
    color: '#fff',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '29px',
    [theme.breakpoints.up('md')]: {
      fontSize: '48px',
      lineHeight: '59px',
    },
  }),
  wrapperBtn: (theme) => ({
    mt: '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'row',
    },
  }),
  link: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: '14px',
    lineHeight: '17px',
    gap: '10px',
    mr: '48px',
    textDecoration: 'none',
  },
  viewBtn: {
    display: 'flex',
    gap: '10px',
  },
  blockCards: (theme) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '65px',
    mt: '48px',
    '&:after': {
      background: 'none',
      [theme.breakpoints.up('lg')]: {
        content: "''",
        position: 'absolute',
        right: '-100px',
        bottom: '-70px',
        width: '250px',
        height: '412px',
        maxHeight: '412px',
        backgroundSize: 'cover',
        background: `url(${banner_circle_bg}) no-repeat`,
      },
    },
    [theme.breakpoints.up('md')]: {
      mt: '95px',
      gap: '130px',
    },
  }),
  card: (theme) => ({
    width: '185px',
    textAlign: 'center',
    boxShadow: 'none',
    p: '28px',
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '8px',
    color: `${theme.palette.primary.dark}`,
  }),
  price: {
    m: '8px 0',
  },
};

export default styles;
