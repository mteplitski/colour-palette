import React from 'react';
import styled from 'styled-components';
import { Palette } from '../components';
import device from '../util/device';
import { ToastContainer } from 'react-toastify';
import { usePaletteContext } from '../contexts/PaletteContext';

const PageBackground = styled.div`
  width: 100%;
  background-color: ${({ color }) => color};
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
  background-color: ${({ color }) => color};
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
  color: ${({ color }) => color};
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
  color: ${({ color }) => color};
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
  color: ${({ color }) => color};
`;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ color }) => color};
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
  const { palette, newPalette } = usePaletteContext();

  if (!palette) {
    return <h1>No Palette</h1>;
  }

  const { colours, light, dark } = palette;

  return (
    <PageBackground color="black">
      <PageContainer color={dark}>
        <HeadingContainer>
          <StyledHeading color={light}>Colour Scheme Generator </StyledHeading>
          <StyledButton onClick={() => newPalette()} color={colours[1]}>
            New Palette
          </StyledButton>
        </HeadingContainer>
        <StyledP color={light}>
          Randomly-generated colour palettes based on{' '}
          <StyledLink
            href="https://en.wikipedia.org/wiki/Color_scheme"
            target="_blank"
            rel="noreferrer"
            color={colours[1]}
          >
            colour wheel theory
          </StyledLink>
          . Use these anywhere!
        </StyledP>
        <Palette colours={colours} light={light} dark={dark} />
      </PageContainer>
      <ToastContainer hideProgressBar={true} autoClose={2000} />
    </PageBackground>
  );
};

export default PaletteGenerator;
