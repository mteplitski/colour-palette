import React from 'react';
import styled from 'styled-components';
import device from '../util/device';
import { getGradients } from '../util/gradient';
import { usePaletteContext } from '../contexts/PaletteContext';
import Head from 'next/head';
import { PageContainer, PageHeading, Button } from '../components';

const Gradient = styled.div`
  border-radius: 24px;
  height: 50vh;
  margin: 16px 0px 16px;

  background: ${({ theme }) => getGradients(theme)};

  @media ${device.mobileL} {
    border-radius: 64px;
    margin: 32px 0px 32px;
  }
`;

const GradientPage = () => {
  const { newPalette, toggleDarkMode, theme } = usePaletteContext();

  return (
    <>
      <Head>
        <title>Gradient Generator</title>
        <meta name="description" content="Gradient background generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <PageHeading heading="Gradient Background Generator">
          <Button onClick={() => newPalette()}>New Gradient</Button>
        </PageHeading>
        <Gradient />
        <h2>CSS:</h2>
        <code lang="css">{`background: ${getGradients(theme)};`}</code>
      </PageContainer>
    </>
  );
};

export default GradientPage;
