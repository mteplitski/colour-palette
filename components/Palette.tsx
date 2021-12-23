import React from 'react';
import styled from 'styled-components';
import device from '../util/device';

interface PaletteProps {
  colours: string[];
  light?: string;
  dark?: string;
}

interface ColourCardProps {
  colour: string;
  key: string;
  label: string;
}

const PaletteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 16px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 32px;
    row-gap: 32px;
  }
`;

const PaletteColour = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 16px;
  background-color: ${(props: any) => props.color};

  @media (min-width: 700px) {
    height: 128px;
    width: 128px;
    border-radius: 32px;
  }
`;

const ColourCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ColourCardLabel = styled.h3`
  text-align: center;
  font-size: 16px;

  @media ${device.mobileL} {
    font-size: 24px;
    font-weight: 500;
  }
`;

const ColourCard = ({ key, colour, label }: ColourCardProps) => (
  <ColourCardContainer key={key}>
    <PaletteColour color={colour} />
    <ColourCardLabel>
      {label}
      <br />
      {colour}
    </ColourCardLabel>
  </ColourCardContainer>
);

const Palette = ({ colours, light, dark }: PaletteProps) => (
  <PaletteContainer>
    <ColourCard key={colours[0]} colour={colours[0]} label="Main Colour" />
    {light && <ColourCard key={light} colour={light} label="Background" />}
    {dark && <ColourCard key={dark} colour={dark} label="Text" />}
    {colours.slice(1).map((colour, index) => (
      <ColourCard key={colour} colour={colour} label={`Accent ${index + 1}`} />
    ))}
  </PaletteContainer>
);

export default Palette;
