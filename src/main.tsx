import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './AppLayout.tsx';
import { Renderer } from './pages/renderer/Renderer.tsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Renderer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
