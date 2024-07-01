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
        company: (props: any) => ({
          bg: props.isActive ? '#2188FF' : '#023B78',
          color: '#FFFFFF',
          _hover: {
            bg: '#2188FF',
            opacity: 0.9,
          },
        }),
        treeItem: (props: any) => ({
          bg: props.isActive ? '#2188FF' : '#ffffff',
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
                bg: props.isActive ? '#ffffff' : '#2188FF',
              },
            },
          },
        }),
        secondary: (props: any) => ({
          borderRadius: '3px',
          borderWidth: '1px',
          borderColor: '#D8DFE6',
          p: '6px, 16px, 6px, 14px',
          gap: '6px',
          bg: props.isActive ? '#2188FF' : '#ffffff',
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '20px',
          color: props.isActive ? '#ffffff' : '#77818C',
          _hover: {
            bg: '#77818C',
            color: '#ffffff',
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
        button: {
          display: { base: 'none', md: 'block' },
        },
      },
    },
  },
});

export default theme;
