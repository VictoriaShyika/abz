import React from 'react';
import styled, { css } from 'styled-components';
import bgIcon from '../../asset/svg/infoBG.jpeg';
import { COLOR_DATA, COLOR_ENUM } from '../../theme/color';
import { Button } from '../button';
import { Heading } from '../heading';
import { Text } from '../text';

export const Elem: React.FC = () => {
  return (
    <Grid>
      <Container backgroundImg={bgIcon}>
        <TextContainer>
          <Heading tid="PAGE.INFO.TITLE" />
          <Text tid="PAGE.INFO.TEXT" />
        </TextContainer>
        <Link href="#signup-container">
          <Button tid="PAGE.BUTTON.SIGN_UP" />
        </Link>
      </Container>
    </Grid>
  );
};
const Link = styled.a`
  text-decoration: none;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(380px, 1170px);
  overflow: hidden;
`;

const Container = styled.div<{ backgroundImg: string }>`
  max-width: 1170px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 650px;
  gap: 32px;

  ${({ backgroundImg }) => css`
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${backgroundImg});
    background-size: cover;
  `};
`;
const TextContainer = styled.div`
  text-align: center;
  color: ${COLOR_DATA[COLOR_ENUM.WHITE]};
  gap: 21px;
  word-wrap: break-word;
  display: grid;
  grid-template-columns: minmax(auto, 380px);
  padding: 0 16px;
  @media (max-width: 400px) {
    width: 328px;
  }
`;
