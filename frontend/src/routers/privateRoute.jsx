import { Navigate, Outlet } from 'react-router';
import React, { useContext } from 'react';
import { AuthContext } from '../services/UserService';

const useAuth = () => {
  const { data } = useContext(AuthContext);
  const logged = { loggedIn: data.token };
  return logged && logged.loggedIn;
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to='/login' />;
};
export default PrivateRoutes;
