import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from './common/header';
import { Info } from './common/info';
import { LayoutAppElem } from './common/layout-app';
import { SignUpContainer } from './epic/sign-up';
import { UserListContainer } from './epic/user-list';

function App() {
  const [users, setUsers] = useState<any[]>([]);

  return (
    <Container>
      <Header />
      <LayoutAppElem>
        <Info />
        <UserListContainer id="user-list" users={users} setUsers={setUsers} />
        <SignUpContainer id="signup-container" setUsers={setUsers} />
      </LayoutAppElem>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
