import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function AlertModalShow() {
  const location = useLocation();
  const from = `${location.pathname}${location.search}${location.hash}`;
  return <Navigate to="/" replace state={{ from }} />;
}

export default AlertModalShow;
