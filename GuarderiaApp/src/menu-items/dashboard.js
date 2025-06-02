// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Solicitudes de inscripcion',
      type: 'item',
      url: '/dashboard/enrollment',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'course',
      title: 'Cursos',
      type: 'item',
      url: '/course',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'professor',
      title: 'Profesores',
      type: 'item',
      url: '/professor',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
