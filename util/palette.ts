import { LCHColour, LCHPaletteSet } from '../types/colour';
import { colord, extend } from 'colord';
import lchPlugin from 'colord/plugins/lch';

extend([lchPlugin]);

const toHex = (colour: LCHColour) => colord(colour).toHex();

const targetHueSteps: Record<string, number[]> = {
  analogous: [0, 30, 60],
  triadic: [0, 120, 240],
  tetradic: [0, 90, 180, 270],
  complementary: [0, 180],
  splitComplementary: [0, 150, 210],
};

const NUM_PALETTES = Object.keys(targetHueSteps).length;

const adjustHue = (val: number) => {
  if (val < 0) val += Math.ceil(-val / 360) * 360;

  return val % 360;
};

const createScientificPalettes = (baseColour: LCHColour) =>
  Object.keys(targetHueSteps).reduce(
    (palettes, currentPaletteType) => ({
      ...palettes,
      [currentPaletteType]: targetHueSteps[currentPaletteType].map(
        (step: number) => ({
          l: baseColour.l,
          c: baseColour.c,
          h: adjustHue(baseColour.h + step),
          mode: 'lch',
        })
      ),
    }),
    {} as LCHPaletteSet
  );

const getMonochromePalette = (baseColour: LCHColour) => {
  const lighterColour = {
    ...baseColour,
    l: 20,
  };

  const darkerColour = {
    ...baseColour,
    l: 70,
  };

  return [baseColour, lighterColour, darkerColour];
};

export const getRandomPalette = () => {
  const base: LCHColour = {
    l: 50 + Math.random() * 10,
    c: 60 + Math.random() * 10,
    h: Math.random() * 360,
  };

  let palette;
  if (Math.random() < 1 / (NUM_PALETTES + 1)) {
    palette = getMonochromePalette(base);
  } else {
    const palettes = createScientificPalettes(base);
    palette =
      Object.entries(palettes)[Math.floor(Math.random() * NUM_PALETTES)][1];
  }

  return {
    colours: palette.map((colour) => toHex(colour)),
    light: lighten(palette[0]),
    dark: darken(palette[0]),
  };
};

const lighten = (base: LCHColour) =>
  toHex({
    ...base,
    l: 98,
    c: 10,
  });

const darken = (base: LCHColour) =>
  toHex({
    ...base,
    l: 1,
    c: 20,
  });
