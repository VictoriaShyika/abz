/* eslint-disable no-useless-escape */
import { i18n } from '../lang';

const REQUIRED_TEXT_TID = 'VALIDATION.REQUIRED';

export const getError = (tid: string, values = {}) =>
  i18n.t && i18n.t(tid, values);

export const minLength = (min: number) => (value: number) => {
  if (String(value).length < min) {
    return getError('VALIDATION.MIN_LENGTH', { min });
  }
  return null;
};
export const maxLength =
  (max: number) =>
  (value = '') => {
    if (String(value).length > max) {
      return getError('VALIDATION.MAX_LENGTH', { max });
    }

    return null;
  };

// eslint-disable-next-line max-len
const EMAIL_EXP =
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
export const email = (value: any) =>
  !EMAIL_EXP.test(value) ? getError('VALIDATION.EMAIL') : null;

const PHONE_UA_EXP = /\+380\d{9}/;

export const phoneUA = (value: any) =>
  !PHONE_UA_EXP.test(value) ? getError('VALIDATION.PHONE') : null;

export const required = (value: any) => {
  if (!value) {
    return getError(REQUIRED_TEXT_TID);
  }
  return null;
};
