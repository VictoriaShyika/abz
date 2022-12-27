export const MODULE_NAME = 'USER_POSITION_LIST_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export const API = {
  TYPE: 'GET',
  URL: 'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
};

export const API_POST = {
  TYPE: 'POST',
  URL: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
};

export const GET_TOKEN = {
  TYPE: 'GET',
  URL: 'https://frontend-test-assignment-api.abz.agency/api/v1/token',
};

export enum FORM_VALUE_ENUM {
  NAME = 'name',
  EMAIL = 'email',
  PHONE = 'phone',
  POSITION_ID = 'position_id',
  PHOTO = 'photo',
}

export type FORM_VALUE_TYPE = `${FORM_VALUE_ENUM}`;

export interface FORM_VALUE_INTER {
  [FORM_VALUE_ENUM.NAME]: string;
  [FORM_VALUE_ENUM.EMAIL]: string;
  [FORM_VALUE_ENUM.PHONE]: string;
  [FORM_VALUE_ENUM.POSITION_ID]: string;
  [FORM_VALUE_ENUM.PHOTO]: any;
}
