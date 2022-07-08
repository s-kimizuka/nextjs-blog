import '../styles/global.css';
import { AppProps } from '../node_modules/next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#5CAA5C',
    800: '#153e75',
    700: '#2a69ac',
    500: '#66CC66',
    300: '#E0F5E0',
  }
};

const theme = extendTheme({ colors });

function App({ Component, pageProps } : AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;