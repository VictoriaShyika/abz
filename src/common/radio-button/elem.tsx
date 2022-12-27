import React from 'react';
import styled from 'styled-components';
import { Text } from '../text';

export const Elem: React.FC<{
  onChange: Function;
  name: string;
  value: number;
  label: string;
}> = ({ onChange, name, value, label }) => {
  const handleChange = (e: any) => {
    onChange(e);
  };
  return (
    <SelectContainer>
      <Radio type="radio" name={name} value={value} onChange={handleChange} />
      <Text>{label && label}</Text>
    </SelectContainer>
  );
};

const SelectContainer = styled.label`
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
`;

const Radio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #d0cfcf;
  border-radius: 50%;
  display: grid;
  place-content: center;
  cursor: pointer;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #00bdd3;
  }
  &:checked::before {
    transform: scale(1);
    border: 1px solid #00bdd3;
  }
  &:checked {
    border: 1px solid #00bdd3;
  }
`;
