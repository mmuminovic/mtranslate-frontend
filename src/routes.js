import Homepage from './pages/Homepage';
import Translate from './pages/Translate';

// const PREFIX_ADMIN = '/admin';

export const USER_ROUTES = {
  homepage: {
    path: '/',
    component: Homepage,
    isExact: true,
  },
  translate: {
    path: '/translate',
    component: Translate,
    isExact: true,
  },
};

export const ADMIN_ROUTES = {};
