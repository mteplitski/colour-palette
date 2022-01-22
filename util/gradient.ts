import { Theme } from '../types/colour';

export const getGradients = (theme: Theme) => {
  let gradients = `
  radial-gradient(
    farthest-side at bottom left,
    ${theme.main},
    transparent
  ),
  radial-gradient(
    farthest-corner at bottom right,
    ${theme.accents[0]},
    transparent 600px
  )
  `;

  if (theme.accents[1]) {
    gradients += `, radial-gradient(
      farthest-corner at top right,
      ${theme.accents[1]},
      transparent 600px
    )`;
  }

  return gradients;
};
