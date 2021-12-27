export interface LCHColour {
  l: number;
  c: number;
  h: number;
}

export type LCHPalette = LCHColour[];

export interface Palette {
  light: string;
  dark: string;
  colours: string[];
}

export type LCHPaletteSet = Record<string, LCHPalette>;

export interface Theme {
  pageBackground: string;
  generatorBackground: string;
  text: string;
  accents: string[];
  main: string;
  mode: string;
}
