import React from 'react';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.js';
import Taskboard from '../Taskboard/index.js';
import theme from '../../commons/Theme';
import configureStore from '../../redux/configStore';
import GlobalLoading from '../../components/GlobalLoading/index.js';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalLoading />
      <Taskboard />
    </ThemeProvider>
  </Provider>
);

export default withStyles(styles)(App);
