export interface TLCHColour {
  l: number;
  c: number;
  h: number;
}

export type TLCHPalette = TLCHColour[];

export interface TPalette {
  light: string;
  dark: string;
  colours: string[];
}

export type TLCHPaletteSet = Record<string, TLCHPalette>;
