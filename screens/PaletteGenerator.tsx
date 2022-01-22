import React from 'react';
import styled from 'styled-components';
import { Palette } from '../components';
import device from '../util/device';
import { ToastContainer } from 'react-toastify';
import { usePaletteContext } from '../contexts/PaletteContext';
import { PageContainer, PageHeading, Button } from '../components';

const StyledP = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  margin-top: 4px;
  margin-bottom: 16px;

  @media ${device.mobileL} {
    margin-bottom: 32px;
    font-size: 24px;
    margin-top: 12px;
  }
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.accents[0]};
`;

const PaletteGenerator = () => {
  const { newPalette, toggleDarkMode } = usePaletteContext();

  return (
    <>
      <PageContainer>
        <PageHeading heading="Colour Scheme Generator">
          <Button onClick={() => newPalette()}>New Palette</Button>
          <Button onClick={() => toggleDarkMode()}>Toggle Mode</Button>
        </PageHeading>
        <StyledP>
          Randomly-generated colour palettes based on{' '}
          <StyledLink
            href="https://en.wikipedia.org/wiki/Color_scheme"
            target="_blank"
            rel="noreferrer"
          >
            colour wheel theory
          </StyledLink>
          . Use these anywhere!
        </StyledP>
        <Palette />
      </PageContainer>
      <ToastContainer hideProgressBar={true} autoClose={2000} />
    </>
  );
};

export default PaletteGenerator;
