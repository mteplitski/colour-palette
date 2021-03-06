// Based on code from https://jsramblings.com/how-to-use-media-queries-with-styled-components/
const size = {
  mobileS: '321px',
  mobileM: '376px',
  mobileL: '426px',
  tablet: '769px',
  laptop: '1025px',
  laptopL: '1441px',
  desktop: '2561px',
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export default device;
