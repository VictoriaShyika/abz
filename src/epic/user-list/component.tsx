import React from 'react';
import styled from 'styled-components';
import { Button } from '../../common/button';
import { CardElem } from '../../common/card';
import { Heading } from '../../common/heading';
import { Loader } from '../../common/loader';

export const Component: React.FC<{
  data: any;
  isLoading?: boolean;
  isSuccess?: boolean;
  handleClick: Function;
  reloadedData: any;
  reloadedUsers: any;
  users: any;
  id?: string;
}> = ({ data, isLoading, isSuccess, handleClick, reloadedData, users, id }) => {
  return (
    <Container id={id}>
      {/* {isLoading && <Loader />} */}
      {isSuccess && users && (
        <Content>
          <Heading tid="PAGE.GET.TITLE" />

          <ContentContainer>
            {users.map((user: any) => (
              <CardElem user={user} />
            ))}
          </ContentContainer>

          <ButtonContainer>
            {data.total_pages !== reloadedData?.page && (
              <Button tid="PAGE.GET.BUTTON" onClick={() => handleClick()} />
            )}
          </ButtonContainer>
        </Content>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  @media (max-width: 1170px) {
    padding: 0 60px;
  }
  @media (max-width: 1000px) {
    padding: 0 32px;
  }
  @media (max-width: 645px) {
    padding: 0 16px;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(282px, 370px) minmax(282px, 370px) minmax(
      282px,
      370px
    );
  gap: 29px;

  @media (max-width: 950px) {
    grid-template-columns: minmax(auto, 370px) minmax(auto, 370px);
    gap: 16px;
  }
  @media (max-width: 645px) {
    grid-template-columns: minmax(auto, 370px);
    justify-content: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
