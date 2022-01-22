import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { PaletteContextProvider } from '../contexts/PaletteContext';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PaletteContextProvider>
      <Component {...pageProps} />
    </PaletteContextProvider>
  );
}

export default MyApp;
