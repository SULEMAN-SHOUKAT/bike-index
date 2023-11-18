import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import InfoCard from '.';

describe('#InfoCard', () => {
  it('renders info card with info title and type', () => {
    render(<InfoCard title={'mocked-info'} type={'info'} />);
    expect(screen.getByText('mocked-info')).toBeInTheDocument();
    expect(screen.getByTestId('info-card-info')).toBeInTheDocument();
  });

  it('renders info card with info title and type', async () => {
    render(<InfoCard title={'mocked-error'} type={'error'} />);
    expect(screen.getByText('mocked-error')).toBeInTheDocument();
    expect(screen.getByTestId('info-card-error')).toBeInTheDocument();
  });

  it('renders info card with empty string and type', async () => {
    render(<InfoCard title={''} type={'error'} />);
    expect(screen.getByTestId('info-card-error')).toBeEmptyDOMElement();
  });
});
