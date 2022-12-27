import React from 'react';
import styled, { css } from 'styled-components';
import { i18n } from '../../lib/lang';
import { Text } from '../text';
import { PROPS_TYPE } from './constant';

export const Elem: React.FC<PROPS_TYPE> = ({
  title,
  error,
  errorMessage,
  onChange,
  onBlur,
  value,
  name,
  disabled,
  placeholder,
  className,
}) => {
  const handleChange = (e: any) => {
    if (!e.target) e.target = {};
    e.target.name = name;
    e.target.value = e.target.value;
    if (onChange) {
      onChange(e);
    }
  };

  const handleBlur = (e: any) => {
    if (!e.target) e.target = {};
    e.target.name = name;
    e.target.value = e.target.value;
    if (onBlur) {
      onBlur(e);
    }
  };

  if (disabled) {
    return <FakeInput>{value}</FakeInput>;
  } else {
    return (
      <Container className={className}>
        <Label error={error} value={value}>
          {i18n.t(title)}
        </Label>
        <Input
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder}
          className={className}
          error={error}
        />

        <ErrorContainer className="errorContainer">
          {(error || errorMessage) && (
            <ErrorMessage>
              <Text>{errorMessage}</Text>
            </ErrorMessage>
          )}
        </ErrorContainer>
      </Container>
    );
  }
};

const Input = styled.input<{ error?: boolean }>`
  border: 1px solid #d0cfcf;
  box-sizing: border-box;
  background: #f8f8f8;
  outline: none;
  border-radius: 4px;
  width: 380px;
  padding: 14px 16px;
  line-height: 26px;
  font-size: 16px;
  ${({ error }) => css`
    border: ${error ? ' 2px solid #CB3D40' : `  1px solid #d0cfcf`};
  `};
  @media (max-width: 400px) {
    width: 348px;
  }
`;

const FakeInput = styled.div``;

const ErrorMessage = styled.div`
  padding-left: 16px;
  & > * {
    font-size: 12px;
    line-height: 14px;
    color: #cb3d40;
  }
`;

const ErrorContainer = styled.div`
  height: 13px;
`;

const Container = styled.div`
  display: grid;
  gap: 4px;
  position: relative;
  &:focus-within {
    & > * {
      display: block;
    }
  }
`;

const Label = styled.label<{ error?: boolean; value?: string }>`
  font-size: 12px;
  padding: 0 4px;
  position: absolute;
  left: 16px;
  top: -8px;
  background: #f8f8f8;
  ${({ error, value }) => css`
    color: ${error && '#CB3D40'};
    display: ${!value && 'none'};
  `};
`;
