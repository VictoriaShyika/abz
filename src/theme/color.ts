export enum COLOR_ENUM {
  YELLOW = 'yellow',
  BLUE = 'blue',
  LIGHT_GRAY = 'lightGray',
}
export type COLOR_TYPE = `${COLOR_ENUM}`;

export const COLOR_DATA = {
  [COLOR_ENUM.YELLOW]: '#F4E041',
  [COLOR_ENUM.BLUE]: '#00BDD3',
  [COLOR_ENUM.LIGHT_GRAY]: '#F8F8F8',
};
