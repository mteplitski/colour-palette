import React from 'react';
import styled from 'styled-components';

interface PaletteProps {
  colours: string[];
}

const PaletteContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 32px;
`;

const PaletteColour = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 32px;
  background-color: ${(props: any) => props.color};
`;

const Palette = ({ colours }: PaletteProps) => (
  <PaletteContainer>
    {colours.map((colour) => (
      <PaletteColour key={colour} color={colour} />
    ))}
  </PaletteContainer>
);

export default Palette;
