import React, { ReactNode } from 'react';

import styled from 'styled-components';

export const Elem: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <Container>
      <Layout>{children}</Layout>
    </Container>
  );
};

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(380px, 1170px);
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 140px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
