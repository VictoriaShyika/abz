import React from 'react';
import styled from 'styled-components';
import { Button } from '../button';
import logoIcon from '../../asset/svg/Logo.svg';

export const Elem: React.FC = () => {
  return (
    <Header>
      <Content>
        <Logo src={logoIcon} />
        <Container>
          <Link href="#user-list">
            <Button tid="PAGE.BUTTON.USERS" />
          </Link>
          <Link href="#signup-container">
            <Button tid="PAGE.BUTTON.SIGN_UP" />
          </Link>
        </Container>
      </Content>
    </Header>
  );
};
const Link = styled.a`
  text-decoration: none;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  max-width: 1170px;
  padding: 13px 60px;
  width: 1170px;

  @media (max-width: 800px) {
    padding: 13px 32px;
  }
  @media (max-width: 600px) {
    padding: 13px 16px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Logo = styled.img``;

const Header = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
