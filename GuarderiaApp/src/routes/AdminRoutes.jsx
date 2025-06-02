import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const AdminRoutes = ({ children }) => {
  const token = useSelector((state) => state.auth?.token);
  return token ? children : <Navigate to="/pages/login" replace />;
};

export default AdminRoutes;
