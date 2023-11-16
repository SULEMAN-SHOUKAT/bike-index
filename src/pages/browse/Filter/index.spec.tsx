import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Filter from '.';
import { mockedFilter } from '../../../utils/mocks/mockedData';

describe('#Filter', () => {
  const mockOnChangeFilter = jest.fn();
  const mockOnFilter = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders filter inputs with correct values and handles input changes', () => {
    render(
      <Filter
        filter={mockedFilter}
        onChangeFilter={mockOnChangeFilter}
        onFilter={mockOnFilter}
      />,
    );

    const searchInput = screen.getByTestId(
      'search',
    ) as unknown as HTMLInputElement;
    const locationInput = screen.getByTestId(
      'location',
    ) as unknown as HTMLInputElement;
    const serialInput = screen.getByTestId(
      'serial',
    ) as unknown as HTMLInputElement;

    expect(searchInput.value).toBe(mockedFilter.query);
    expect(locationInput.value).toBe(mockedFilter.location);
    expect(serialInput.value).toBe(mockedFilter.serial);

    fireEvent.change(searchInput, { target: { value: 'New Query' } });
    fireEvent.change(locationInput, { target: { value: 'New Location' } });
    fireEvent.change(serialInput, { target: { value: 'New Serial' } });

    expect(mockOnChangeFilter).toHaveBeenCalledWith('New Query', 'query');
    expect(mockOnChangeFilter).toHaveBeenCalledWith('New Location', 'location');
    expect(mockOnChangeFilter).toHaveBeenCalledWith('New Serial', 'serial');
  });

  it('calls onFilter callback when the filter button is clicked', () => {
    const { getByText } = render(
      <Filter
        filter={mockedFilter}
        onChangeFilter={mockOnChangeFilter}
        onFilter={mockOnFilter}
      />,
    );

    const filterButton = getByText('Filter');
    fireEvent.click(filterButton);

    expect(mockOnFilter).toHaveBeenCalledTimes(1);
  });
});
