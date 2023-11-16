import React from 'react';

import { ChangeEvent } from 'react';
import styled from 'styled-components';

type InputProps = {
  id: string;
  title: string;
  value?: string;
  type: string;
  hideLabel?: boolean;
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({
  id,
  title,
  hideLabel = false,
  value,
  type,
  onChange,
}) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputContainer>
      {!hideLabel && (
        <InputLabel htmlFor={id} data-testid={`${id}-label`}>
          {title}
        </InputLabel>
      )}
      <InputField
        type={type}
        id={id}
        data-testid={id}
        placeholder={title}
        value={value || ''}
        onChange={handleOnChange}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-bottom: 4px;
  font-size: 16px;
  color: #1c2833;
`;

const InputField = styled.input`
  padding: 10px 8px;
  border: 1px solid #abb2b9;
  color: #525252;
  min-height: 25px;
  display: initial;

  outline: none;
  border-radius: 4px;
  font-size: 15px;
  &:focus {
    background-size:
      100% 2px,
      100% 1px;
    outline: 0 none;
    border: 1px solid blue;
  }
  &::placeholder {
    font-weight: bold;
    color: #abb2b9;
  }
`;
export default Input;
