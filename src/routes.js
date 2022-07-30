import Homepage from './pages/Homepage';
import Translate from './pages/Translate';

// const PREFIX_ADMIN = '/admin';

export const USER_ROUTES = {
  homepage: {
    path: '/',
    element: Homepage,
    isExact: true,
  },
  translate: {
    path: '/translate',
    element: Translate,
    isExact: true,
  },
};

export const ADMIN_ROUTES = {};
