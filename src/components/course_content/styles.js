const styles = {
  wrapper: {
    my: '48px',
    minWidth: '299px',
  },
  blockTitle: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: '24px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  }),
  title: (theme) => ({
    fontWeight: 500,
    color: theme.palette.typography.title,
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      lineHeight: '29px',
      mb: '36px',
    },
  }),
  section: {
    color: '#000',
    textTransform: 'capitalize',
    my: '14px',
  },
  lesson: {
    display: 'flex',
    justifyContent: 'space-between',
    p: '24px',
  },
  lessonTitle: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
  },
  collapseBtn: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapperIcon: {
    display: 'flex',
  },
  icon: (theme) => ({
    width: '24px',
    height: '24px',
    background: theme.palette.primary.dark,
    color: '#fff',
    borderRadius: '50%',
    ml: '10px',
  }),
  blockTopic: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
    color: theme.palette.primary.dark,
    p: '0 62px 14px',
  }),
  divider: (theme) => ({
    borderColor: theme.palette.primary.dark,
    m: '2px 24px',
  }),
  blockInfo: (theme) => ({
    background: theme.palette.primary.dark,
    display: 'flex',
    gap: '70px',
    p: '14px 62px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      p: '14px 62px',
      gap: '15px',
    },
  }),
  blockSteps: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
    color: '#fff',
  },
  lessonContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  basicTopicLesson: {
    display: 'flex',
    p: '24px',
    alignItems: 'center',
  },
};

export default styles;
