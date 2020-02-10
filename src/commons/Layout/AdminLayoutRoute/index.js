import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from '../../../components/DashBoard';

const AdminLayoutRoute = ({ component: YourComponent, ...remainProps }) => {
  return (
    <Route
      {...remainProps}
      render={routeProps => {
        return (
          <Dashboard {...remainProps}>
            <YourComponent {...routeProps} />
          </Dashboard>
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
