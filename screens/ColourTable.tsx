import React from 'react';
import styled from 'styled-components';

interface TColourTableProps {
  colours: string[];
  light: string;
  dark: string;
}

const ColourTableCell = styled.div`
  background-color: ${({ color }) => color};
  height: 64px;
`;

const getTableRow = (colour: string, section: string) => {
  return (
    <tr>
      <td>{section}</td>
      <ColourTableCell color={colour} />
      <td>{colour}</td>
    </tr>
  );
};

const ColourTable = ({ colours, light, dark }: TColourTableProps) => {
  const tableRows = [
    getTableRow(colours[0], 'Main Colour'),
    getTableRow(light, 'Background'),
    getTableRow(dark, 'Text'),
    ...colours
      .slice(1)
      .map((colour, index) => getTableRow(colour, `Accent ${index + 1}`)),
  ];

  return (
    <table>
      <thead>
        <td>Section</td>
        <td>Colour</td>
        <td>Colour Hex Code</td>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default ColourTable;
