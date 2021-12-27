import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Palette } from '../components';
import device from '../util/device';
import { ToastContainer } from 'react-toastify';
import { usePaletteContext } from '../contexts/PaletteContext';

const PageBackground = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.pageBackground};
  padding: 24px 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobileL} {
    padding: 64px 64px 0;
  }
`;

const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  background-color: ${({ theme }) => theme.generatorBackground};
  padding: 32px;
  border-radius: 24px 24px 0px 0px;

  @media ${device.mobileL} {
    padding: 64px;
    border-radius: 64px 64px 0px 0px;
  }
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.mobileL} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 24px;
  margin-bottom: 8px;

  @media ${device.mobileL} {
    margin-bottom: 0px;
    font-size: 30px;
  }

  @media ${device.tablet} {
    font-size: 36px;
  }
`;

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

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.accents[0]};
  padding: 12px 20px;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border: none;
  margin-bottom 8px;

  @media ${device.mobileL} {
    margin-left: 16px;
    margin-bottom: 0px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const PaletteGenerator = () => {
  const { palette, newPalette, theme, toggleDarkMode } = usePaletteContext();

  // TODO: Remove and find a better solution
  useEffect(() => newPalette(), []);

  if (!palette) {
    return <h1>No Palette</h1>;
  }

  return (
    <ThemeProvider theme={theme}>
      <PageBackground>
        <PageContainer>
          <HeadingContainer>
            <StyledHeading>Colour Scheme Generator </StyledHeading>
            <StyledButton onClick={() => newPalette()}>
              New Palette
            </StyledButton>
            <StyledButton onClick={() => toggleDarkMode()}>
              Toggle Mode
            </StyledButton>
          </HeadingContainer>
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
      </PageBackground>
    </ThemeProvider>
  );
};

export default PaletteGenerator;
