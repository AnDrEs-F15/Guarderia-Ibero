import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthRegister from '../views/pages/auth-forms/AuthRegister';
import AdminRoutes from './AdminRoutes';
import EnrollmentIndex from '../views/enrollment/EnrollmentIndex';
import EnrollmentDetail from '../views/enrollment/EnrollmentDetail';
import CourseStudent from '../views/course/CourseStudent';

// dashboard routing
const StudenIndex = Loadable(lazy(() => import('views/home/StudentIndex')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const RegistrationIndex = Loadable(lazy(() => import('views/registrations/RegistrationIndex')));
const CourseIndex = Loadable(lazy(() => import('views/course/CourseIndex')));
const ProfessorIndex = Loadable(lazy(() => import('views/professor/ProfessorIndex')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <AdminRoutes>
      <MainLayout />
    </AdminRoutes>
  ),
  children: [
    {
      path: '/',
      element: <EnrollmentIndex />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'enrollment',
          element: <EnrollmentIndex />
        }
      ]
    },
    {
      path: '/registrations',
      element: <RegistrationIndex />
    },
    {
      path: '/access-config',
      element: <AuthRegister />
    },
    {
      path: '/course',
      element: <CourseIndex />
    },
    {
      path: '/course/:id/students',
      element: <CourseStudent />
    },
    {
      path: '/professor',
      element: <ProfessorIndex />
    },
    {
      path: '/enrollment/:id',
      element: <EnrollmentDetail />
    }
  ]
};

export default MainRoutes;
