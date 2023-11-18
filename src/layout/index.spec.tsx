import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Layout from '.';

describe('Layout component', () => {
  it('renders children and NavBar', () => {
    render(
      <Layout>
        <div>Test Children</div>
      </Layout>,
    );

    expect(screen.getByText('Bike Index')).toBeInTheDocument();

    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });
});
