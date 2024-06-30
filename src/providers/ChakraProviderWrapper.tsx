'use client';

import theme from '@/theme'; // Certifique-se de que o caminho está correto
import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ChakraProviderWrapper = ({ children }: Props) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakraProviderWrapper;
