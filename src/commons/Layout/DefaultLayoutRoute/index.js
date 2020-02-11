import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

// without Dashboard
const DefaultLayoutRoute = ({ component: YourComponent, ...remainProps }) => {
  return (
    <Route
      {...remainProps}
      render={routeProps => {
        return <YourComponent {...routeProps} />;
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
