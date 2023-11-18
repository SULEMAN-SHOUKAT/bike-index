import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BikeCard from '.';

import { mockedBike } from '../../utils/mocks/mockedData';
import { Bike } from '../../services/bike-index';

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
  it('renders with empty data', () => {
    render(<BikeCard bike={{} as Bike} />);

    expect(screen.getByTestId('bike-card')).toBeInTheDocument();
    expect(screen.getByTestId('bike-title')).toHaveTextContent('');
    expect(screen.getByTestId('bike-serial')).toHaveTextContent('Serial:');
    expect(screen.getByTestId('bike-description')).toHaveTextContent(
      'Description:',
    );
    expect(screen.getByTestId('bike-stolen-date')).toHaveTextContent(
      'Stolen At: Invalid Date',
    );
    expect(screen.getByTestId('bike-frame-model')).toHaveTextContent(
      'Frame Model:',
    );
    expect(screen.getByTestId('bike-location')).toHaveTextContent('Location:');
  });

  it('renders with invalid date for stolen date', () => {
    const { getByTestId } = render(
      <BikeCard bike={{ date_stolen: 'Invalid Date' } as unknown as Bike} />,
    );

    expect(getByTestId('bike-stolen-date')).toHaveTextContent(
      'Stolen At: Invalid Date',
    );
  });
});
