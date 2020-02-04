import React from 'react';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import styles from './styles.js';
import Taskboard from '../Taskboard/index.js';
import theme from '../../commons/Theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Taskboard />
  </ThemeProvider>
);

export default withStyles(styles)(App);
