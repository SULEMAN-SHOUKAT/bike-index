import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Input from '.';

describe('#Input', () => {
  const mockOnChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders input field with label and handles change event', () => {
    render(
      <Input
        id='username'
        title='Username'
        type='text'
        onChange={mockOnChange}
      />,
    );

    const inputField = screen.getByTestId('username');
    expect(inputField).toBeInTheDocument();

    fireEvent.change(inputField, { target: { value: 'testuser' } });

    expect(mockOnChange).toHaveBeenCalledWith('testuser');
  });

  it('renders input field without label if hideLabel is true', () => {
    render(
      <Input
        id='username'
        title='Username'
        type='text'
        hideLabel
        onChange={mockOnChange}
      />,
    );

    const label = screen.queryByLabelText('Username');
    expect(label).toBeNull();
  });

  it('renders input field with provided value', () => {
    render(
      <Input
        id='username'
        title='Username'
        type='text'
        value='testuser'
        onChange={mockOnChange}
      />,
    );

    const inputField = screen.getByDisplayValue('testuser');
    expect(inputField).toBeInTheDocument();
  });
});
