import React, { useState } from 'react';
import styled from 'styled-components';
import { getRandomPalette } from '../util/colour';
import { Palette } from '../components';

const INITIAL_PALETTE = getRandomPalette();

const StyledButton = styled.button`
  margin-top: 16px;
  cursor: pointer;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props: any) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.h1`
  color: ${(props: any) => props.color};
`;

const PaletteGenerator = () => {
  const [palette, setPalette] = useState(INITIAL_PALETTE);
  const { colours, light, dark } = palette;

  return (
    <StyledContainer color={light}>
      <StyledHeading color={dark}>Colours!!</StyledHeading>
      <Palette colours={colours} />
      <StyledButton onClick={() => setPalette(getRandomPalette())}>
        New Palette
      </StyledButton>
    </StyledContainer>
  );
};

export default PaletteGenerator;
