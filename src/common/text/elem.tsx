import React from 'react';
import { i18n } from '../../lib/lang';
import styled from 'styled-components';

export const Elem: React.FC<{
  tid?: string;
  className?: string;
  children?: any;
}> = ({ tid, className, children }) => {
  return <Text className={className}>{tid ? i18n.t(tid) : children}</Text>;
};

const Text = styled.p`
  font-family: 'Nunito', sans-serif;
  display: block;
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  word-wrap: break-word;
`;
