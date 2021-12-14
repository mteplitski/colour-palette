import type { NextPage } from 'next';
import Head from 'next/head';
import PaletteGenerator from '../screens/PaletteGenerator';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Colour Palette</title>
        <meta name="description" content="Custom colour palette" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PaletteGenerator />
    </>
  );
};

export default Home;
