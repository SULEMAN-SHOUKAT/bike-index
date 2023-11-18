import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Pagination from '.';

const renderPagination = (
  currentPage: number,
  totalPages: number,
  count: number,
  mockOnPageChange: jest.Mock,
) => {
  return render(
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      count={count}
      onPageChange={mockOnPageChange}
    />,
  );
};

describe('#Pagination', () => {
  const mockOnPageChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders pagination with correct information', () => {
    renderPagination(2, 5, 30, mockOnPageChange);

    expect(screen.getByText('total records:')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('calls onPageChange correctly on prev and next buttons click', () => {
    renderPagination(3, 5, 30, mockOnPageChange);

    const prevButton = screen.getByText('Prev');
    const nextButton = screen.getByText('Next');

    fireEvent.click(prevButton);
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  it('disables prev and next buttons correctly based on currentPage and totalPages', () => {
    renderPagination(1, 1, 10, mockOnPageChange);

    const prevButton = screen.getByText('Prev');
    const nextButton = screen.getByText('Next');

    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });
});
