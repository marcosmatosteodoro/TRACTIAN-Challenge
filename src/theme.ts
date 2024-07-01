import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
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
    tractianBlue: '#17192D',
    white: '#ffffff',
    primary: '#2188FF',
    primaryBlod: '#023B78',
    gray: '#D8DFE6',
    dividerGray: '#E3EAEF',
    textTilte: '#24292F',
    textSubTilte: '#77818C',
    textInfo: '#88929C',
    placeholder: '#C1C9D2',
    success: '#52C41A',
    danger: '#ED3833',
  },
  components: {
    Divider: {
      baseStyle: {
        bg: 'dividerGray',
      },
    },
    Button: {
      variants: {
        company: (props: any) => ({
          bg: props.isActive ? 'primary' : 'primaryBlod',
          color: 'white',
          _hover: {
            bg: 'primary',
            opacity: 0.9,
          },
        }),
        treeItem: (props: any) => ({
          bg: props.isActive ? 'primary' : 'white',
          alignItems: 'center',
          p: 0,
          w: 'full',
          justifyContent: 'flex-start',
          _hover: {
            '& > p': {
              position: 'relative',
              _after: {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: '-2px',
                height: '1px',
                width: '100%',
                bg: props.isActive ? 'white' : 'primary',
              },
            },
          },
        }),
        secondary: (props: any) => ({
          borderRadius: '3px',
          borderWidth: '1px',
          borderColor: 'gray',
          p: '6px, 16px, 6px, 14px',
          gap: '6px',
          bg: props.isActive ? 'primary' : 'white',
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '20px',
          color: props.isActive ? 'white' : 'textSubTilte',
          _hover: {
            bg: 'gray',
            color: 'white',
          },
          sx: {
            span: {
              margin: { base: 0, md: 'initial' },
            },
          },
        }),
      },
    },
    Text: {
      variants: {
        title: {
          fontWeight: '600',
          fontSize: '18px',
          lineHeight: '28px',
          color: 'textTilte',
        },
        primary: {
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '24px',
          color: 'textTilte',
        },
        secondary: {
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '24px',
          color: 'textInfo',
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
          color: 'textTilte',
        },
        subtitle: {
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
          textAlign: 'center',
          color: 'textSubTilte',
        },
        button: {
          display: { base: 'none', md: 'block' },
        },
      },
    },
  },
});

export default theme;
