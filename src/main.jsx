import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { GlobalStyled } from './GlobalStyled.jsx';
import { routes } from './routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled />
    <RouterProvider router={routes} />
  </StrictMode>,
);

