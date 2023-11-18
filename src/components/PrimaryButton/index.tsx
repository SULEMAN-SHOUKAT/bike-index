import React from 'react';
import styled from 'styled-components';

type PrimaryButtonProps = {
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  title: string;
  onClick: () => void;
};
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  disabled,
  title,
  onClick,
  size,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      size={size}
      data-testid='primary-button'
    >
      {title}
    </Button>
  );
};

const Button = styled.button<{ size?: 'sm' | 'md' | 'lg' }>`
  padding: 4px 10px;
  background-color: #2e4053;
  font-weight: bold;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-height: ${(props) => (props.size === 'lg' ? '3rem' : '2rem')};
  min-width: ${(props) => (props.size === 'lg' ? '6rem' : '4rem')};
  border-radius: 4px;
  border: 1px solid #2e4053;
  color: white;
  cursor: pointer;
  &:disabled {
    background-color: #abb2b9;
    border: none;
    cursor: not-allowed;
  }
`;

export default PrimaryButton;
