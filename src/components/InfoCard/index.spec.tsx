import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InfoCard from '.';

describe('#InfoCard', () => {
  it('renders info card with info title and type', async () => {
    render(<InfoCard title={'mocked-info'} type={'info'} />);
    expect(await screen.getByText('mocked-info')).toBeInTheDocument();
    expect(await screen.getByTestId('info-card-info')).toBeInTheDocument();
  });

  it('renders info card with info title and type', async () => {
    render(<InfoCard title={'mocked-error'} type={'error'} />);
    expect(await screen.getByText('mocked-error')).toBeInTheDocument();
    expect(await screen.getByTestId('info-card-error')).toBeInTheDocument();
  });
});
