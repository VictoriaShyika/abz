import React, { useEffect, useState } from 'react';
import { Component } from './component';
import { useQuery } from 'react-query';
import { action } from './action';
import { FORM_VALUE_ENUM, FORM_VALUE_TYPE, MODULE_NAME } from './constant';
import { FormikValues, useFormik } from 'formik';
import { validation } from '../../lib/validation';
import {
  required,
  phoneUA,
  maxLength,
  minLength,
  email,
} from '../../lib/validation/service';

const config = {
  [FORM_VALUE_ENUM.NAME]: [required, minLength(2), maxLength(60)],
  [FORM_VALUE_ENUM.EMAIL]: [required, email],
  [FORM_VALUE_ENUM.PHONE]: [phoneUA, required],
  [FORM_VALUE_ENUM.POSITION_ID]: [required],
  [FORM_VALUE_ENUM.PHOTO]: [required],
};

const initialValues = {
  [FORM_VALUE_ENUM.NAME]: '',
  [FORM_VALUE_ENUM.EMAIL]: '',
  [FORM_VALUE_ENUM.PHONE]: '',
  [FORM_VALUE_ENUM.POSITION_ID]: '',
  [FORM_VALUE_ENUM.PHOTO]: '',
};

const validate = (values: FormikValues) => validation(values, config);

export const Container: React.FC<{ id: any; setUsers: any }> = ({
  id,
  setUsers,
}) => {
  const preFetch = useQuery([MODULE_NAME], action);

  const [token, setToken] = useState('');
  const [postSuccess, setPostSuccess] = useState<any>(false);
  const [postLoading, setPostLoading] = useState<any>(false);

  const getToken: any = () => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setToken(data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  const isLoading = () => {
    if (preFetch.isLoading) {
      return true;
    }
  };

  const reloudData: any = () => {
    fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setUsers(data.users);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const isSuccess = () => {
    if (preFetch.isSuccess) {
      return true;
    }
  };

  const getData: any = () => {
    const data = preFetch.data;

    if (data) {
      return data;
    }
  };

  const formik: FormikValues = useFormik({
    initialValues,
    validate,
    onSubmit: (values: any) => {
      let formData = new FormData();
      formData.append(FORM_VALUE_ENUM.NAME, values[FORM_VALUE_ENUM.NAME]);
      formData.append(FORM_VALUE_ENUM.EMAIL, values[FORM_VALUE_ENUM.EMAIL]);
      formData.append(FORM_VALUE_ENUM.PHONE, values[FORM_VALUE_ENUM.PHONE]);
      formData.append(
        FORM_VALUE_ENUM.POSITION_ID,
        values[FORM_VALUE_ENUM.POSITION_ID],
      );
      formData.append(FORM_VALUE_ENUM.PHOTO, values[FORM_VALUE_ENUM.PHOTO]);
      setPostLoading(true);

      fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
        method: 'POST',
        body: formData,
        headers: { Token: token },
      })
        .then(function (response: any) {
          return response.json();
        })
        .then(function (data: any) {
          setPostLoading(false);
          setPostSuccess(data.success);
          reloudData();
        });
    },
  });

  const isFieldError = (name: FORM_VALUE_TYPE): boolean => {
    return formik.errors[name] && formik.touched[name] ? true : false;
  };

  const getFieldError = (name: FORM_VALUE_TYPE): string | undefined =>
    isFieldError(name) ? formik.errors[name] : undefined;

  const isSubmitDisabled = () => {
    if (!formik.isValid) {
      return true;
    }
    if (!formik.dirty) {
      return true;
    }
    if (preFetch.isLoading) {
      return true;
    }
  };

  const isSuccessPost = () => {
    if (postSuccess) {
      return true;
    }
  };

  const isLoadingPost = () => {
    if (postLoading) {
      return true;
    }
  };

  const getFieldValue = (name: FORM_VALUE_TYPE) => formik.values[name];

  return (
    <Component
      data={getData()}
      isLoading={isLoading()}
      isSuccess={isSuccess()}
      isFieldError={isFieldError}
      getFieldError={getFieldError}
      isSubmitDisabled={isSubmitDisabled}
      getFieldValue={getFieldValue}
      formik={formik}
      isSuccessPost={isSuccessPost()}
      isLoadingPost={isLoadingPost()}
      id={id}
    />
  );
};
