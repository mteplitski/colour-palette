export interface TLCHColour {
  l: number;
  c: number;
  h: number;
  mode: string;
}

export type TLCHPalette = TLCHColour[];

export interface TPalette {
  light: string;
  dark: string;
  colours: string[];
}
