import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../common/button';
import { FieldTextElem } from '../../common/field-text';
import { FieldUploadElem } from '../../common/field-upload';
import { Heading } from '../../common/heading';
import { RadioButtonElem } from '../../common/radio-button';
import { Text } from '../../common/text';
import { i18n } from '../../lib/lang';
import { FORM_VALUE_ENUM } from './constant';
import successIcon from '../../asset/svg/success-image.svg';
import { GridElem } from '../../common/grid';
import { Loader } from '../../common/loader';

export const Component: React.FC<{
  data: any;
  isLoading?: boolean;
  isSuccess?: boolean;
  isSuccessPost?: boolean;
  isLoadingPost?: boolean;
  isFieldError?: any;
  getFieldError?: any;
  isSubmitDisabled?: any;
  getFieldValue?: any;
  formik?: any;
  id?: string;
}> = ({
  data,
  isLoading,
  isSuccess,
  isSuccessPost,
  isLoadingPost,
  isFieldError,
  getFieldError,
  isSubmitDisabled,
  getFieldValue,
  formik,
  id,
}) => {
  const [fileName, setFileName] = useState<any>('');

  return (
    <Form id={id} onSubmit={formik.handleSubmit}>
      {(isLoading || isLoadingPost) && <Loader />}

      {isSuccess && data && !isSuccessPost && !isLoadingPost && (
        <Content>
          <Heading tid="PAGE.POST.TITLE" />
          <FormContainer>
            <GridElem spacing={50}>
              <GridElem spacing={43}>
                <GridElem spacing={37}>
                  <FieldTextElem
                    name={FORM_VALUE_ENUM.NAME}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    title="PAGE.POST.NAME"
                    value={getFieldValue(FORM_VALUE_ENUM.NAME)}
                    placeholder={i18n.t('PAGE.POST.NAME')}
                    errorMessage={getFieldError(FORM_VALUE_ENUM.NAME)}
                    error={isFieldError(FORM_VALUE_ENUM.NAME)}
                  />
                  <FieldTextElem
                    name={FORM_VALUE_ENUM.EMAIL}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    title="PAGE.POST.EMAIL"
                    value={getFieldValue(FORM_VALUE_ENUM.EMAIL)}
                    placeholder={i18n.t('PAGE.POST.EMAIL')}
                    errorMessage={getFieldError(FORM_VALUE_ENUM.EMAIL)}
                    error={isFieldError(FORM_VALUE_ENUM.EMAIL)}
                  />
                  <FieldTextElem
                    name={FORM_VALUE_ENUM.PHONE}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    title="PAGE.POST.PHONE"
                    value={getFieldValue(FORM_VALUE_ENUM.PHONE)}
                    placeholder={i18n.t('PAGE.POST.PHONE')}
                    errorMessage={getFieldError(FORM_VALUE_ENUM.PHONE)}
                    error={isFieldError(FORM_VALUE_ENUM.PHONE)}
                  />
                </GridElem>
                <ContentContainer>
                  <GridElem spacing={47}>
                    <SelectContainer>
                      <Text tid="PAGE.POST.POSITION" />

                      <Container role="group" aria-labelledby="my-radio-group">
                        {data.positions &&
                          data.positions.map((position: any) => (
                            <RadioButtonElem
                              onChange={formik.handleChange}
                              name={FORM_VALUE_ENUM.POSITION_ID}
                              value={position.id}
                              label={position.name}
                            />
                          ))}
                      </Container>
                    </SelectContainer>

                    <FieldUploadElem
                      onChange={(event: any) => {
                        formik.setFieldValue(
                          FORM_VALUE_ENUM.PHOTO,
                          event.currentTarget.files[0],
                        );
                        setFileName(event.currentTarget.files[0].name);
                      }}
                      name={FORM_VALUE_ENUM.PHOTO}
                      fileName={fileName}
                    />
                  </GridElem>
                </ContentContainer>
              </GridElem>

              <Button
                type="submit"
                tid="PAGE.BUTTON.SIGN_UP"
                disabled={isSubmitDisabled()}
              />
            </GridElem>
          </FormContainer>
        </Content>
      )}

      {isSuccessPost && (
        <SuccessContainer>
          <Heading tid="PAGE.POST_SUCCESS.TITLE" />

          <Image src={successIcon} />
        </SuccessContainer>
      )}
    </Form>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 290px;
  width: 328px;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
