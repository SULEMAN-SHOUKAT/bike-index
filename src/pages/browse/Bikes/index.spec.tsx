import React from 'react';
import { render, screen } from '@testing-library/react';
import Bikes from '.';
import { mockedBike, mockedCount } from '../../../utils/mocks/mockedData';

describe('#Bikes', () => {
  const mockOnPageChange = jest.fn();

  const mockData = {
    bikes: [mockedBike],
    count: mockedCount[0],
    totalPages: 2,
  };

  it('renders loading skeleton when loading or refetching', () => {
    render(
      <Bikes
        isLoading={true}
        isRefetching={false}
        isError={false}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />,
    );
    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();
  });

  it('renders info card for error state', () => {
    render(
      <Bikes
        isLoading={false}
        isRefetching={false}
        isError={true}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />,
    );

    expect(
      screen.getByText(
        'Oops! an unknown error occurs please contact the service',
      ),
    ).toBeInTheDocument();
    expect(screen.getByTestId('info-card-error')).toBeInTheDocument();
  });

  it('renders info card when no bikes found', () => {
    render(
      <Bikes
        isLoading={false}
        isRefetching={false}
        isError={false}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />,
    );
    expect(screen.getByText('No bikes found')).toBeInTheDocument();
    expect(screen.getByTestId('info-card-info')).toBeInTheDocument();
  });

  it('renders bikes with pagination and BikeCard components when data is available', () => {
    render(
      <Bikes
        bikeIndexes={mockData}
        isLoading={false}
        isRefetching={false}
        isError={false}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />,
    );
    expect(screen.getByText(mockData.bikes[0].title)).toBeInTheDocument();
    expect(screen.getAllByTestId('bike-card')).toHaveLength(
      mockData.bikes.length,
    );
  });
});
