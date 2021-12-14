import React from 'react';
import styled from 'styled-components';

interface PaletteProps {
  colours: string[];
}

const PaletteContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const PaletteColour = styled.div`
  height: 100px;
  width: 100px;
  margin-right: 16px;
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
