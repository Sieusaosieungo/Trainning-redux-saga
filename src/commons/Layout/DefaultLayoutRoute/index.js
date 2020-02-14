import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCookie } from '../../../utils/cookie';

// without Dashboard
const DefaultLayoutRoute = ({ component: YourComponent, ...remainProps }) => {
  const token = getCookie('token');
  return (
    <Route
      {...remainProps}
      render={routeProps => {
        return !token ? (
          <YourComponent {...routeProps} />
        ) : (
          <Redirect to={{ pathname: '/admin/task-board' }} />
        );
      }}
    />
  );
};

DefaultLayoutRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.string,
};

export default DefaultLayoutRoute;
