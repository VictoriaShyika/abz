export enum COLOR_ENUM {
  YELLOW = 'yellow',
  BLUE = 'blue',
  LIGHT_GRAY = 'lightGray',
  BLACK = 'black',
  WHITE = 'white',
  BUTTON_HOVER = 'button_hover',
  BUTTON_DISABLED = 'button_disabled',
  BORDER = 'border',
  LABEL = 'label',
  ERROR = 'error',
}
export type COLOR_TYPE = `${COLOR_ENUM}`;

export const COLOR_DATA = {
  [COLOR_ENUM.YELLOW]: '#F4E041',
  [COLOR_ENUM.BUTTON_HOVER]: '#ffe302',
  [COLOR_ENUM.BUTTON_DISABLED]: '#B4B4B4',
  [COLOR_ENUM.BORDER]: '#d0cfcf',
  [COLOR_ENUM.BLUE]: '#00BDD3',
  [COLOR_ENUM.LIGHT_GRAY]: '#F8F8F8',
  [COLOR_ENUM.BLACK]: '#000000',
  [COLOR_ENUM.WHITE]: '#FFFFFF',
  [COLOR_ENUM.LABEL]: '#7e7e7e',
  [COLOR_ENUM.ERROR]: '#cb3d40',
};
