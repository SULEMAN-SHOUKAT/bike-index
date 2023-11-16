import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockedBike } from '../../utils/mocks/mockedData';
import BikeCard from '.';

describe('#BikeCard', () => {
  it('renders bike card with correct details', async () => {
    render(<BikeCard bike={mockedBike} />);
    expect(await screen.getByText(mockedBike.title)).toBeInTheDocument();
    expect(
      await screen.getByText(
        new Date(mockedBike.date_stolen).toLocaleString('DE'),
      ),
    ).toBeInTheDocument();
    expect(await screen.getByText(mockedBike.description)).toBeInTheDocument();
    expect(await screen.getByText(mockedBike.frame_model)).toBeInTheDocument();
    expect(await screen.getByText(mockedBike.serial)).toBeInTheDocument();
    expect(
      await screen.getByText(mockedBike.stolen_location),
    ).toBeInTheDocument();
  });

  it('renders placeholder when thumb is not available', () => {
    const bikeWithoutThumb = { ...mockedBike, thumb: undefined };
    render(<BikeCard bike={bikeWithoutThumb} />);

    expect(screen.getByTestId('bike-image-placeholder')).toBeInTheDocument();
  });
});
