import { AplicationProvider } from '@/context/AplicationContext';
import ReactQueryProvider from '@/context/ReactQueryProvider';
import { ChakraProvider } from '@chakra-ui/react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tractian Challenge',
  description: 'Tractian Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <ReactQueryProvider>
          <ChakraProvider>
            <AplicationProvider>{children}</AplicationProvider>
          </ChakraProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
