import { lazy } from 'react';
// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import Congratulation from '../views/form-register/components/Congratulation';

// maintenance routing
const LoginPage = Loadable(lazy(() => import('views/pages/authentication/Login')));
const RegisterPage = Loadable(lazy(() => import('views/pages/authentication/Register')));
const RegisterFormIndex = Loadable(lazy(() => import('../views/form-register/RegisterFormIndex')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/pages/login',
      element: <LoginPage />
    },
    {
      path: '/pages/register',
      element: <RegisterPage />
    },
    {
      path: '/form-register',
      element: <RegisterFormIndex />
    },
    {
      path: '/form-register-end',
      element: <Congratulation />
    }
  ]
};

export default AuthenticationRoutes;
