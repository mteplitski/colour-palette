import React from 'react';
import styled from 'styled-components';
import device from '../util/device';
import { toast } from 'react-toastify';

interface PaletteProps {
  colours: string[];
  light: string;
  dark: string;
}

interface ColourCardProps {
  colour: string;
  label: string;
  labelColour: string;
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
    padding-top: 8px;
  }
`;

const PaletteColour = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 16px;
  background-color: ${({ color }) => color};

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

  @media ${device.tablet} {
    padding: 8px;
    border: 1px solid white;
    border-radius: 16px;

    &:hover {
      cursor: pointer;
      border: 1px solid black;
    }
  }
`;

const ColourCardLabel = styled.h3`
  text-align: center;
  font-size: 16px;
  color: ${({ color }) => color};

  @media ${device.mobileL} {
    font-size: 24px;
    font-weight: 500;
  }

  @media ${device.tablet} {
    margin-bottom: 0px;
  }
`;

const onCopy = (colour: string, label: string) => {
  navigator.clipboard.writeText(colour);
  toast(`Copied ${label} (${colour}) to clipboard!`);
};

const ColourCard = ({ colour, label, labelColour }: ColourCardProps) => (
  <ColourCardContainer onClick={() => onCopy(colour, label)}>
    <PaletteColour color={colour} />
    <ColourCardLabel color={labelColour}>
      {label}
      <br />
      {colour}
    </ColourCardLabel>
  </ColourCardContainer>
);

const Palette = ({ colours, light, dark }: PaletteProps) => (
  <PaletteContainer>
    <ColourCard
      key={colours[0]}
      colour={colours[0]}
      label="Main Colour"
      labelColour={light}
    />
    {light && (
      <ColourCard
        key={light}
        colour={light}
        label="Background"
        labelColour={light}
      />
    )}
    {dark && (
      <ColourCard key={dark} colour={dark} label="Text" labelColour={light} />
    )}
    {colours.slice(1).map((colour, index) => (
      <ColourCard
        key={colour}
        colour={colour}
        label={`Accent ${index + 1}`}
        labelColour={light}
      />
    ))}
  </PaletteContainer>
);

export default Palette;
