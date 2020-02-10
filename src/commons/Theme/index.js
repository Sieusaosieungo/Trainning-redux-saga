import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  // color
  color: {
    primary: '#D32f2f',
    secondary: '#00BCD4',
    error: '#E64A19',
    textColor: '#FFFFFF',
    defaultTextColor: '#000000',
    hover: 'rgba(0,0,0, 0.08)',
  },

  // typoraphy
  typoraphy: {
    fontFamily: 'Roboto',
  },

  // shape
  shape: {
    borderRadius: 4,
    background: '#7B1FA2',
    textColor: '#FFFFFF',
    borderColor: '#CCCCCC',
  },
});

export default theme;
