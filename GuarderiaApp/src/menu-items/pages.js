// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Configuracion',
  caption: 'Configuracion del sistema',
  icon: icons.IconKey,
  type: 'group',
  children: [
    ,
    /*     {
      id: 'authentication',
      title: 'Configuracion de acceso',
      type: 'collapse',
      icon: icons.IconKey,
      children: [
        {
          id: 'login',
          title: 'login',
          type: 'item',
          url: '/pages/login',
          target: true
        },
        {
          id: 'register',
          title: 'Crear cuenta administradora',
          type: 'item',
          url: '/pages/register',
          target: true
        }
      ]
    }, */
    {
      id: 'acc_admin',
      title: 'Accesos admin',
      type: 'item',
      url: '/access-config',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default pages;
