import React from 'react';
import styled from 'styled-components';
import { COLOR_DATA, COLOR_ENUM } from '../../theme/color';
import { Text } from '../text';

export const Elem: React.FC<{
  user: any;
}> = ({ user }) => {
  return (
    <Card key={user.id}>
      <Img src={user.photo} alt="user photo" />
      <Text
        tid={
          user.name.length > 38
            ? `${user.name.substring(0, 38)} ...`
            : user.name
        }
      />
      <Info>
        <Text tid={user.position} />
        <ConTooltip>
          <Text
            tid={
              user.email.length > 40
                ? `${user.email.substring(0, 40)} ...`
                : user.email
            }
          />
          <Tooltip>
            <Text tid={user.email} />
          </Tooltip>
        </ConTooltip>
        <Text tid={user.phone} />
      </Info>
    </Card>
  );
};

const Card = styled.div`
  padding: 20px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${COLOR_DATA[COLOR_ENUM.WHITE]};
  border-radius: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Tooltip = styled.div`
  visibility: hidden;
  z-index: 1;
  opacity: 0.87;
  width: 100%;
  padding: 3px 16px;
  background: ${COLOR_DATA[COLOR_ENUM.BLACK]};
  color: ${COLOR_DATA[COLOR_ENUM.WHITE]};
  position: absolute;
  top: 36px;
  left: 50px;
  border-radius: 4px;
  font: 16px;
  transition: all 0.3s ease-in-out;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 70px;
  width: 70px;
`;
const ConTooltip = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    transform: translateY(0px);
  }
  &:hover > * {
    visibility: visible;
    opacity: 1;
    transition: 0.3s linear;
  }
`;
