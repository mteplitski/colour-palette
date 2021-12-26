import React, { useContext, useState, useEffect } from 'react';
import { TNullablePalette } from '../types/colour';
import { getRandomPalette } from '../util/palette';

type PaletteContextState = {
  palette: TNullablePalette;
  newPalette: () => void;
};

const DEFAULT_STATE: PaletteContextState = {
  palette: null,
  newPalette: () => {},
};

const PaletteContext = React.createContext(DEFAULT_STATE);

export const usePaletteContext = () => useContext(PaletteContext);

export const PaletteContextProvider: React.FC = ({ children }) => {
  const [palette, setPalette] = useState(null as TNullablePalette);
  useEffect(() => setPalette(getRandomPalette()), []);

  const newPalette = () => setPalette(getRandomPalette());

  if (!palette) {
    return null;
  }

  const state: PaletteContextState = { palette, newPalette };

  return (
    <PaletteContext.Provider value={state}>{children}</PaletteContext.Provider>
  );
};
