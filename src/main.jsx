import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyled } from './GlobalStyled.jsx';
import { routes } from './Routes.jsx';
import UserProvider from './Context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled />
    <UserProvider>
      <RouterProvider router={routes} />
    </UserProvider>
  </StrictMode>
);
