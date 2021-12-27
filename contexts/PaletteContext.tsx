import React, { useContext, useState, useEffect } from 'react';
import { Palette, Theme } from '../types/colour';
import { Nullable } from '../types/generic';
import { DEFAULT_THEME, getRandomPalette, getThemeFromPalette } from '../util';

type PaletteContextState = {
  palette: Nullable<Palette>;
  theme: Theme;
  newPalette: () => void;
};

const DEFAULT_STATE: PaletteContextState = {
  palette: null,
  theme: DEFAULT_THEME,
  newPalette: () => {},
};

const PaletteContext = React.createContext(DEFAULT_STATE);

export const usePaletteContext = () => useContext(PaletteContext);

export const PaletteContextProvider: React.FC = ({ children }) => {
  const [palette, setPalette] = useState(null as Nullable<Palette>);
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => newPalette(), []);

  const newPalette = () => {
    const newPalette = getRandomPalette();
    const newTheme = getThemeFromPalette(newPalette);
    setPalette(newPalette);
    setTheme(newTheme);
  };

  const state: PaletteContextState = { palette, newPalette, theme };

  return (
    <PaletteContext.Provider value={state}>{children}</PaletteContext.Provider>
  );
};
