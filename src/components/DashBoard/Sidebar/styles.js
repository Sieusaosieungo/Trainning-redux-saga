const styles = theme => ({
  drawerPaper: {
    width: 240,
    zIndex: 99,
    maxWidth: 240,
    position: 'relative',
  },
  menuLink: {
    textDecoration: 'none',
    color: theme.color.defaultTextColor,
  },
  menuLinkActive: {
    '&>div': {
      backgroundColor: theme.color.hover,
    },
  },
});

export default styles;
