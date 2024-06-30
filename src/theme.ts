import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
  colors: {
    brand: {
      50: '#e3f2f9',
      100: '#c5e4f3',
      200: '#a2d4ec',
      300: '#7ac1e4',
      400: '#47a9da',
      500: '#0088cc',
      600: '#007ab8',
      700: '#006ba1',
      800: '#005885',
      900: '#003f5e',
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
    Text: {
      variants: {
        title: {
          fontWeight: '600',
          fontSize: '18px',
          lineHeight: '28px',
          color: '#24292F',
        },
        primary: {
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '24px',
          color: '#24292F',
        },
        secondary: {
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '24px',
          color: '#88929C',
        },
        treeItem: {
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '22px',
          px: '4px',
        },
        subtitleBlod: {
          fontSize: '20px',
          fontWeight: 600,
          lineHeight: '28px',
          color: '#24292F',
        },
        subtitle: {
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
          textAlign: 'center',
          color: '#77818C',
        },
      },
    },
  },
});

export default theme;
