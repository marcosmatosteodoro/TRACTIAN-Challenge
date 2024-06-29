import ReactQueryProvider from '@/providers/ReactQueryProvider';
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
          <ChakraProvider>{children}</ChakraProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
