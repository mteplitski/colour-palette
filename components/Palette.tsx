import React from 'react';
import styled from 'styled-components';
import device from '../util/device';
import { toast } from 'react-toastify';
import { usePaletteContext } from '../contexts/PaletteContext';

interface ColourCardProps {
  colour: string;
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
    border: 1px solid transparent;
    border-radius: 16px;

    &:hover {
      cursor: pointer;
      border: 1px solid white;
    }
  }
`;

const ColourCardLabel = styled.h3`
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text};

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

const ColourCard = ({ colour, label }: ColourCardProps) => (
  <ColourCardContainer onClick={() => onCopy(colour, label)}>
    <PaletteColour color={colour} />
    <ColourCardLabel>
      {label}
      <br />
      {colour}
    </ColourCardLabel>
  </ColourCardContainer>
);

const Palette = () => {
  const { theme } = usePaletteContext();

  return (
    <PaletteContainer>
      <ColourCard key={theme.main} colour={theme.main} label="Main Colour" />
      <ColourCard
        key={theme.pageBackground}
        colour={theme.pageBackground}
        label="Background"
      />
      <ColourCard key={theme.text} colour={theme.text} label="Text" />
      {theme.accents.map((colour, index) => (
        <ColourCard
          key={colour}
          colour={colour}
          label={`Accent ${index + 1}`}
        />
      ))}
    </PaletteContainer>
  );
};

export default Palette;
