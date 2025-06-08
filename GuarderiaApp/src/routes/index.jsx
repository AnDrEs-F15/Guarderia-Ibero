import { createBrowserRouter } from 'react-router-dom';

// routes
import AuthenticationRoutes from './AuthenticationRoutes';
import MainRoutes from './MainRoutes';
const baseName = import.meta.env.VITE_APP_BASE_NAME?.replace(/\/$/, '') || '';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([MainRoutes, AuthenticationRoutes], {
  basename: baseName
});

export default router;
