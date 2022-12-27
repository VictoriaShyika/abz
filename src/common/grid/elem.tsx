import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

export const Elem: React.FC<{
  children: ReactNode;
  spacing?: number;
  className?: string;
}> = ({ children, spacing, className }) => {
  return (
    <Grid className={className} spacing={spacing}>
      {children}
    </Grid>
  );
};

const Grid = styled.div<{ spacing?: number }>`
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: inherit;
  width: 100%;
  ${({ spacing }) =>
    css`
      grid-gap: ${spacing}px;
    `}
`;
