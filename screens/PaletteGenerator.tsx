import React, { useState } from 'react';
import styled from 'styled-components';
import { getRandomPalette } from '../util/colour';
import { Palette } from '../components';

const INITIAL_PALETTE = getRandomPalette();

const StyledButton = styled.button`
  background-color: ${(props: any) => props.color};
  margin-top: 16px;
  cursor: pointer;
`;

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

const StyledHeading = styled.h1`
  color: ${(props: any) => props.color};
`;

const StyledHeading2 = styled.h2`
  color: ${(props: any) => props.color};
`;

const PaletteGenerator = () => {
  const [palette, setPalette] = useState(INITIAL_PALETTE);
  const { colours, light, dark } = palette;

  return (
    <PageBackground color={light}>
      <PageContainer>
        <StyledHeading color={dark}>Heading</StyledHeading>
        <StyledHeading2 color={dark}>Subheading</StyledHeading2>
        {/* {colours.map((colour) => (
          <StyledButton key={colour} color={colour}>
            {colour}
          </StyledButton>
        ))} */}
        <Palette colours={colours} />
        <button onClick={() => setPalette(getRandomPalette())}>
          New Palette
        </button>
      </PageContainer>
    </PageBackground>
  );
};

export default PaletteGenerator;
