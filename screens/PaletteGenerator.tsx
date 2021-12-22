import React, { useState } from 'react';
import styled from 'styled-components';
import { Palette } from '../components';
import { getRandomPalette } from '../util/colour';

const INITIAL_PALETTE = getRandomPalette();

const PageBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props: any) => props.color};
  padding: 64px 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  background-color: white;
  padding: 64px;
  border-radius: 64px 64px 0px 0px;
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const StyledHeading = styled.h1`
  color: ${(props: any) => props.color};
  margin-bottom: 0px;
  margin-top: 0px;
`;

const StyledP = styled.p`
  color: ${(props: any) => props.color};
  margin-bottom: 32px;
`;

// based on the button component from MUI: https://mui.com/components/buttons/
const StyledButton = styled.button`
  cursor: pointer;
  margin-left: 16px;
  background-color: rgb(0, 127, 255);
  padding: 12px 20px;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  cursor: pointer;
  box-shadow: rgb(61 71 82 / 10%) 0px 4px 20px 0px,
    rgb(0 127 255 / 0%) 0px 0px 0px 0px;
  border: none;
`;

const PaletteGenerator = () => {
  const [palette, setPalette] = useState(INITIAL_PALETTE);
  const { colours, light, dark } = palette;

  return (
    <PageBackground color={light}>
      <PageContainer>
        <HeadingContainer>
          <StyledHeading color={dark}>Colour Scheme Generator </StyledHeading>
          <StyledButton onClick={() => setPalette(getRandomPalette())}>
            New Palette
          </StyledButton>
        </HeadingContainer>
        <StyledP>
          Randomly-generated colour palettes based on{' '}
          <a href="https://en.wikipedia.org/wiki/Color_scheme" target="_blank">
            colour wheel theory
          </a>
          . Use these anywhere!
        </StyledP>
        <Palette colours={colours} light={light} dark={dark} />
      </PageContainer>
    </PageBackground>
  );
};

export default PaletteGenerator;
