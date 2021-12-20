import React, { useState } from 'react';
import styled from 'styled-components';
import { getRandomPalette } from '../util/colour';
import ColourTable from './ColourTable';

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

const StyledHeading = styled.h1`
  color: ${(props: any) => props.color};
`;

const StyledHeading2 = styled.h2`
  color: ${(props: any) => props.color};
`;

const StyledButton = styled.button`
  margin-top: 16px;
`;

const PaletteGenerator = () => {
  const [palette, setPalette] = useState(INITIAL_PALETTE);
  const { colours, light, dark } = palette;

  return (
    <PageBackground color={light}>
      <PageContainer>
        <StyledHeading color={dark}>Heading</StyledHeading>
        <StyledHeading2 color={dark}>Subheading</StyledHeading2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod leo in tellus tincidunt accumsan. Pellentesque convallis
          ultrices leo elementum bibendum. Vivamus fringilla eu velit ac
          dignissim. Quisque a risus tincidunt ipsum fringilla tempor. Nulla
          fringilla magna nec faucibus viverra. Nullam sem massa, malesuada eu
          egestas in, scelerisque eu lectus. Nulla mattis porta nibh, sed
          volutpat orci imperdiet a. Nullam sodales ante volutpat laoreet
          convallis. Maecenas pellentesque pulvinar arcu. Ut sagittis, arcu sit
          amet ullamcorper sollicitudin, mauris turpis facilisis leo, non
          sodales risus sem vitae urna. Ut at facilisis nibh, a molestie ante.
        </p>
        <ColourTable colours={colours} light={light} dark={dark} />
        <StyledButton onClick={() => setPalette(getRandomPalette())}>
          New Palette
        </StyledButton>
      </PageContainer>
    </PageBackground>
  );
};

export default PaletteGenerator;
