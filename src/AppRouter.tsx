import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './pages/browse';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Browse />,
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
