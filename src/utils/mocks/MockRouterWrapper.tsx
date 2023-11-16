import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

const MockRouterWrapper = ({ children }: { children: ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default MockRouterWrapper;
