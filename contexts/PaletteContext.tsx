import React, { useContext, useState, useEffect } from 'react';
import { Palette, Theme } from '../types/colour';
import { Nullable } from '../types/generic';
import {
  DEFAULT_THEME,
  getRandomPalette,
  getThemeFromPalette,
  DEFAULT_PALETTE,
} from '../util';
import { ThemeProvider } from 'styled-components';

type PaletteContextState = {
  palette: Nullable<Palette>;
  theme: Theme;
  mode: string;
  newPalette: () => void;
  toggleDarkMode: () => void;
};

const DEFAULT_STATE: PaletteContextState = {
  palette: null,
  theme: DEFAULT_THEME,
  mode: 'light',
  newPalette: () => {},
  toggleDarkMode: () => {},
};

const PaletteContext = React.createContext(DEFAULT_STATE);

export const usePaletteContext = () => useContext(PaletteContext);

export const PaletteContextProvider: React.FC = ({ children }) => {
  const [palette, setPalette] = useState(DEFAULT_PALETTE);
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [mode, setMode] = useState('light');

  const newPalette = () => {
    setPalette(getRandomPalette());
  };

  const toggleDarkMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (palette === DEFAULT_PALETTE) {
      setPalette(getRandomPalette());
    }
    setTheme(getThemeFromPalette(palette, mode));
  }, [palette, mode]);

  const state: PaletteContextState = {
    palette,
    theme,
    mode,
    newPalette,
    toggleDarkMode,
  };

  return (
    <PaletteContext.Provider value={state}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PaletteContext.Provider>
  );
};
