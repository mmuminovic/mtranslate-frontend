import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import Navigation from './containers/Navigation';
import { ADMIN_ROUTES, USER_ROUTES } from './routes';
import { PrivateRoute } from './hooks/PrivateRoute';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Translate from './pages/Translate';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.token);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    // <SocketIOProvider url={process.env.REACT_APP_SOCKETIO_URL}>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/translate" element={<Translate />} />
        <Route exact path="/" element={<Homepage />} />
        {/* {Object.keys(USER_ROUTES).map((route) => (
          <PrivateRoute
            key={USER_ROUTES[route].path}
            exact={USER_ROUTES[route].isExact}
            path={USER_ROUTES[route].path}
            element={USER_ROUTES[route].component}
            isAuthenticated={isAuthenticated}
            redirectTo={'/login'}
          />
        ))} */}
        {/* {Object.keys(ADMIN_ROUTES).map((route) => (
          <PrivateRoute
            key={ADMIN_ROUTES[route].path}
            exact={ADMIN_ROUTES[route].isExact}
            path={ADMIN_ROUTES[route].path}
            element={ADMIN_ROUTES[route].component}
            isAuthenticated={isAdmin}
            redirectTo={'/'}
          />
        ))} */}
      </Routes>
    </BrowserRouter>
    // </SocketIOProvider>
  );
}

export default App;
