import React from 'react';
import { Navigate, Route } from 'react-router-dom';

export const PrivateRoute = ({ component, isAuthenticated, redirectTo, ...rest }) => {
  const RouteComponent = (props) =>
    isAuthenticated ? React.createElement(component, props) : <Navigate to={redirectTo} replace />;
  return <Route {...rest} element={<RouteComponent />} />;
};
