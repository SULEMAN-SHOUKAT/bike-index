import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PrimaryButton from '.';

describe('#PrimaryButton', () => {
  const mockOnClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders primary button with correct title and handles click event', () => {
    render(<PrimaryButton title='Click Me' onClick={mockOnClick} />);

    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders primary button with different sizes', () => {
    render(
      <>
        <PrimaryButton title='Small' onClick={mockOnClick} size='sm' />
        <PrimaryButton title='Medium' onClick={mockOnClick} size='md' />
        <PrimaryButton title='Large' onClick={mockOnClick} size='lg' />
      </>,
    );

    const smallButton = screen.getByText('Small');
    const mediumButton = screen.getByText('Medium');
    const largeButton = screen.getByText('Large');

    expect(smallButton).toHaveStyle('min-height: 2rem');
    expect(mediumButton).toHaveStyle('min-height: 2rem');
    expect(largeButton).toHaveStyle('min-height: 3rem');
  });

  it('disables primary button when disabled prop is true', () => {
    render(<PrimaryButton title='Disabled' onClick={mockOnClick} disabled />);

    const disabledButton = screen.getByText('Disabled');
    expect(disabledButton).toBeDisabled();

    fireEvent.click(disabledButton);
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
