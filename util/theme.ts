import { Palette } from '../types/colour';

export const DEFAULT_THEME = {
  pageBackground: 'white',
  generatorBackground: 'grey',
  text: 'black',
  main: 'black',
  accents: [] as string[],
  mode: 'light',
};

export const getThemeFromPalette = (palette: Palette, mode: string) => {
  const { light, dark, colours } = palette;
  const isLightMode = mode === 'light';

  return {
    pageBackground: isLightMode ? 'white' : dark,
    generatorBackground: isLightMode ? light : 'black',
    text: isLightMode ? dark : light,
    main: colours[0],
    accents: colours.slice(1),
    mode,
  };
};
