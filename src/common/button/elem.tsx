import React from 'react';
import styled, { css } from 'styled-components';
import { COLOR_TYPE } from '../../theme/color';
import { Text } from '../text';
import { PROPS_TYPE } from './constant';

export const Elem: React.FC<PROPS_TYPE> = ({
  children,
  tid,
  color = 'yellow',
  disabled,
  onClick,
  className,
  type,
}) => {
  const handleClick = (e: any) => {
    if (onClick) onClick(e);
  };
  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      customColor={color}
      className={className}
      type={type}
    >
      <Content>{tid ? <Text tid={tid} /> : children}</Content>
    </Button>
  );
};

const Content = styled.div``;

const Button = styled.button<{
  customColor?: COLOR_TYPE;
  disabled?: boolean;
}>`
  display: block;
  width: 100px;
  height: 34px;
  border: none;
  border-radius: 80px;
  ${({ disabled }) => css`
    cursor: ${disabled ? 'default' : 'pointer'};
    background-color: ${disabled ? '#B4B4B4' : `#f4e041`};
    & > * {
      color: ${disabled ? 'white' : `black`};
    }
    &:hover {
      background-color: ${disabled ? '#B4B4B4' : `#ffe302`};
    }
  `};
`;
