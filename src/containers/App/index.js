import React from 'react';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './styles.js';
import theme from '../../commons/Theme';
import configureStore from '../../store/configStore';
import GlobalLoading from '../../components/GlobalLoading/index.js';
import ModalApp from '../../components/Modal/index.js';
import { ADMIN_ROUTES, ROUTES } from '../../constants';
import AdminLayoutRoute from '../../commons/Layout/AdminLayoutRoute/index.js';
import DefaultLayoutRoute from '../../commons/Layout/DefaultLayoutRoute/index.js';

const store = configureStore();

const App = () => {
  const renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map(route => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  };

  const renderDefaultRoutes = () => {
    let xhtml = null;
    xhtml = ROUTES.map(route => {
      return (
        <DefaultLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });

    return xhtml;
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />
          <GlobalLoading />
          <ModalApp />
          <Switch>
            {renderAdminRoutes()}
            {renderDefaultRoutes()}
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default withStyles(styles)(App);
