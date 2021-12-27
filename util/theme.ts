import { Palette } from '../types/colour';

export const DEFAULT_THEME = {
  pageBackground: 'white',
  generatorBackground: 'grey',
  text: 'black',
  main: 'black',
  accents: [] as string[],
};

export const getThemeFromPalette = (palette: Palette) => {
  const { light, dark, colours } = palette;

  return {
    pageBackground: dark,
    generatorBackground: 'black',
    text: light,
    main: colours[0],
    accents: colours.slice(1),
  };
};
