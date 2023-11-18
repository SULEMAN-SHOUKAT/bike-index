import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './pages/browse';
import Layout from './layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Browse />,
  },
]);

const AppRouter: React.FC = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default AppRouter;
