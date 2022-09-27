import React, { Fragment } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { loading = false, user } = useSelector((state) => state.user);

  if (!user?.email) {
    return <Navigate to="/login" />;
  } else return <Fragment>{children}</Fragment>;
};

export default ProtectedRoute;
