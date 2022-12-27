import { ReactNode } from 'react';
import { COLOR_TYPE } from '../../theme/color';

export interface PROPS_TYPE {
  tid?: string;
  color?: COLOR_TYPE;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: Function;
  className?: string;
  type?: ROLE_TYPE;
}

export enum ROLE_ENUM {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export type ROLE_TYPE = `${ROLE_ENUM}`;

export const ROLE_DATA = {
  [ROLE_ENUM.BUTTON]: 'button',
  [ROLE_ENUM.SUBMIT]: 'submit',
  [ROLE_ENUM.RESET]: 'reset',
};
