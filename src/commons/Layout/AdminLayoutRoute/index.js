import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from '../../../components/DashBoard';
import { getCookie } from '../../../utils/cookie';

const AdminLayoutRoute = ({ component: YourComponent, ...remainProps }) => {
  const token = getCookie('token');
  return (
    <Route
      {...remainProps}
      render={routeProps => {
        // return (
        //   <Dashboard {...remainProps}>
        //     <YourComponent {...routeProps} />
        //   </Dashboard>
        // );
        return token ? (
          <Dashboard {...remainProps}>
            <YourComponent {...routeProps} />
          </Dashboard>
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        );
      }}
    />
  );
};

AdminLayoutRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.string,
};

export default AdminLayoutRoute;
