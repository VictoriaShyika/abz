import React from 'react';
import styled from 'styled-components';
import { Text } from '../text';

export const Elem: React.FC<{
  onChange: Function;
  name: string;
  fileName: string;
}> = ({ onChange, name, fileName }) => {
  const handleChange = (e: any) => {
    onChange(e);
  };

  return (
    <Container>
      <Input
        type="file"
        onChange={handleChange}
        name={name}
        accept="image/jpg, image/jpeg"
        hidden
        id="actual-btn"
      />
      <Label htmlFor="actual-btn">
        <Text tid="PAGE.POST.UPLOAD" />
      </Label>
      <FileName id="file-chosen">
        {fileName ? fileName : <LableText tid="PAGE.POST.UPLOAD_PLACEHOLDER" />}
      </FileName>
    </Container>
  );
};

const LableText = styled(Text)`
  color: #7e7e7e;
`;
const Container = styled.div`
  /* width: 380px; */
  display: flex;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 85px minmax(245px, 297px);
  /* grid-template-rows: 54px; */
`;
const Label = styled.label`
  border: 1px solid black;
  background: #f8f8f8;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 14px 15px;
  line-height: 26px;
  cursor: pointer;
  margin: 0;
  box-sizing: border-box;
`;
const FileName = styled.div`
  border: 1px solid #d0cfcf;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left: none;
  padding: 14px 15px;
  line-height: 26px;
  margin: 0;
  box-sizing: border-box;
`;
const Input = styled.input``;
