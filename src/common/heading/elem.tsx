import React from 'react';
import { i18n } from '../../lib/lang';
import styled from 'styled-components';

export const Elem: React.FC<{
  tid?: string;
  className?: string;
  children?: any;
}> = ({ tid, className, children }) => {
  return (
    <Heading className={className}>{tid ? i18n.t(tid) : children}</Heading>
  );
};

const Heading = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
  text-align: center;
  word-wrap: break-word;
`;
