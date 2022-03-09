import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme'
import { SideBarDrawerProvider } from '../contexts/SideBarDrawerContext';

function MyApp({ Component, pageProps }) {
  return (<ChakraProvider theme={theme}>
    <SideBarDrawerProvider>
      <Component {...pageProps} /> 
    </SideBarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
